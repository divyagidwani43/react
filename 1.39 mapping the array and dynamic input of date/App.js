import React from "react";

import Expenses from "./src/components/expenses/Expenses";
import NewExpense from "./src/components/newexpenses/newExpense";
import "./index";
const App = () => {
  // 2
  // below is the expenses array we wanna render this into expenses component
  //render refers to taking a computer image or file and converting it into another format or applying a modification, like shading or shadows
  //to render we need to pass expenses function from expenses as prop in here
  //---->expenses.js
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
    },
    {
      id: "e5",
      title: "manually added object in expenses array",
      amount: 0,
      date: new Date(2021, 5, 12)
    }
    //4
    //we do not need to change the code in expenses.js to print it to screen now
  ];
  const getDataNewExpense = (newExpenseData) => {
    const any_name_2 = {
      ...newExpenseData,
      id: Math.random().toString()
    };
    console.log("app.js");
    console.log(any_name_2);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense DataNewExpense={getDataNewExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
