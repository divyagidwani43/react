import React, { useState } from "react";
import "./expenseForm.css";
import "./newExpense.css";
import Card from "../UI/Card";
import "../expenses/ExpenseItem.css";

const ExpenseForm = (props) => {
  // added props
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
    event.preventDefault();
    const any_name_2 = {
      title_variable_name_any: enteredTitle,
      amount_var: enteredAmount,
      // date_var:new Date(enteredDate)
    };
    console.log(any_name_2);
    props.onAnyNameThatDefinesThis(any_name_2);
    //the function is called here (the () mean the function is called here)
    // the above will take functon any_name_2 and its data and store it in props and pass to onAnyNameThatDefinesThis
    // which is called in newExpense so the data reaches there and goes to the function its pointed to where id is added and console log is done
    // the above is the way to pass data up from child component to parent component
    //--->newExpense
    titleAdded("");
    DateAdded("");
    amountAdded("");
  };
  return (
    <div>
      <form onSubmit={any_name_for_func_defining_submit}>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
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
