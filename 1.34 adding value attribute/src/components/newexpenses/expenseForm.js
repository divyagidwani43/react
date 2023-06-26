import React, { useState } from "react";
import "./expenseForm.css";
import "./newExpense.css";
import Card from "../UI/Card";
import "../expenses/ExpenseItem.css";

const ExpenseForm = () => {
  const [enteredTitle, titleAdded] = useState("");
  let titleChange = (event) => {
    titleAdded(event.target.value);                   
  };
  const [enteredAmount, amountAdded] = useState("");
  const amount = (event) => {
    amountAdded(event.target.value);
  };
  const [enteredDate, DateAdded] = useState("");
  const Date = (event) => {
    DateAdded(event.target.value);
  };
  

  const any_name_for_func_defining_submit = (event) => {
    event.preventDefault(); //built in javas functin to stop default behavour of reload the page
    const any_name_2 = {
      title_variable_name_any: enteredTitle,
      amount_var: enteredAmount,
//      date_var: new Date(enteredDate)
    };
    console.log(any_name_2);
  }; // on clicking add expense we will get the any_name_2 function on log

  return (
    <div>
      <form onSubmit={any_name_for_func_defining_submit}>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value = {enteredTitle}
            // now we had a previous state of (say '') then updated it to toiletry then again update to paper before we update to paper we have the title value to toiletry th value is saved in value = {} function here so the it updates the state as we change it
            // we can also manually enter the value here
            onChange={titleChange}
          ></input>
          <p>{enteredTitle}</p>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amount}
          ></input>
          <p>{enteredAmount}</p>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={Date}
          />
          <p>{enteredDate}</p>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>

      {/* will display below */}
      <Card className="expense-item">
        <div className="expense-item__description">
          <div>{enteredDate}</div>
          <h2>{enteredTitle}</h2>
          <div className="expense-item__price">${enteredAmount}</div>
        </div>
      </Card>
    </div>
  );
};
export default ExpenseForm;
