import React, { useState } from "react";
import "./expenseForm.css";
import "./newExpense.css";
import Card from "../UI/Card";
import "../expenses/ExpenseItem.css";

const ExpenseForm = () => {
  const [enteredTitle, titleAdded] = useState("");
  //this function stores the previous value i.e until the function is called the value of title stays"" as seen in string and until the new value is entered the old value stays
  let titleChange = (event) => {
    titleAdded(event.target.value); //this is the value we enter its the location where out input value is stored
  };
  const [enteredAmount, amountAdded] = useState("");
  const amount = (event) => {
    amountAdded(event.target.value);
  };
  const [enteredDate, DateAdded] = useState("");
  const Date = (event) => {
    DateAdded(event.target.value);
  };
  //call use state function by their [first,second] first value in {}
  return (
    <div>
      <form>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChange}></input>
          <p>{enteredTitle}</p>
          {/* <p>{titleAdded}</p> */}
          {/* wont display title */}
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amount}></input>
          <p>{enteredAmount}</p>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
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
