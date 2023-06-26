import React, { useState } from "react";
import "./expenseForm.css";
import "./newExpense.css";
import ExpenseDate from "../expenses/ExpenseDate";
import Card from "../UI/Card";
import "../expenses/ExpenseItem.css";

const ExpenseForm = () => {
  const [firstValue, secondValue] = useState(''); //log to empty vale at start
  let titleChange = (event) => {
    secondValue(event.target.value);
  }
  const [enteredAmount, amountAdded] = useState('');
  const amount = (event) => {
    amountAdded(event.target.value)
  }
  const [enteredDate, DateAdded] = useState('');
  const Date = (event) => {
    DateAdded(event.target.value)
  }
  return (<div>
    <form>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChange}></input>
        <p>{firstValue}</p>
        {/* <p>{secondValue}</p> */}
        {/* wont display title */}
      </div>

      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={amount}></input>
        <p>{enteredAmount}</p>
      </div>

      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={Date} />
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
        <h2>{firstValue}</h2>
        <div className="expense-item__price">${enteredAmount}</div>
      </div>
    </Card>

  </div>
  );
};
export default ExpenseForm;
