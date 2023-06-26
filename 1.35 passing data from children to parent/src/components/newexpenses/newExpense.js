import React from "react";
import "./newExpense.css";
import ExpenseForm from "./expenseForm";
const NewExpense = (props) => {
  const any_name_33 = (Name_parameter)=>{
    //() to define ur own events like parameter and the function in{}expects to get this paramenter in()
    const any_name_2={             //defined in expenForm if diff names 2 function get executed
      ...Name_parameter,           //will get the data from any_name_2 function defined in expenseForm i.e title and amount and save it in name_parameter by spreading it
      id: Math.random().toString()
    }
    console.log(any_name_2)
    //<---app.js
    props.DataNewExpense(any_name_2)
    // do not export any_name_33 function as we need the data of any_name_2 and also that will error
    //--->app.js

  }
  return (
    <div className="new-expense">
      <ExpenseForm onAnyNameThatDefinesThis = {any_name_33}  />
      {/* we just point to the function dont call it the funtion is called when we add () */}
      {/* this function any_name_33 must be defined here in this file to be used here */}
      {/* befor onChange the function was called as we input data here we need to call onAnyNameThatDefinesThis  */}
      {/* we need to use the function inside our custom components to call them we didnt need to do this for onChange as it was built in  */}
      {/* so we used props in expenseItem as props.amount and amount was then accessed in expenses as <expenseItem amount = {functionSet}> */}
      {/* similary now we have the {functionSet} and amount as onAnyNameThatDefinesThis = {any_name_33} we need to callonAnyNameThatDefinesThis in ecpenseForm through props  */}
      {/*  ----> expenseForm */}
      {/* ---->back */}
      {/* the above is the way to pass data up from child component to parent component */}
      {/* when we run the function see console we can see tht the obj printed is from js27 where newExpense func ends so from newExpense not form so the data from form is successfully passed to newExpense */}
      {/* the id being printed is another proof of function being executed from here as tis added in any_name_2 func here */}
      {/* ---->app.js */}
    </div>
  );
};

export default NewExpense;
