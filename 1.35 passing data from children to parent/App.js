import React from "react";

import Expenses from "./src/components/expenses/Expenses";
import NewExpense from "./src/components/newexpenses/newExpense";
import "./index";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];
  const getDataNewExpense = (newExpenseData) =>{
    const any_name_2 ={
      ...newExpenseData,
      id: Math.random().toString(),
    }  //---->newExpense
    console.log('app.js')
    console.log(any_name_2)
  }
  // do not add any_name_33 or any other name cz we need data of any_name_2 function from newExpense that is connected to any_name_2 in expenseForm
  // all the function will be called from expenseForm as well as newExpense and app.js to only call from one comment out the other console.log
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense DataNewExpense = {getDataNewExpense}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
