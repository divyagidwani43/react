import React, { useState } from "react";
import "./expenseForm.css";
import "./newExpense.css";
import ExpenseDate from "../expenses/ExpenseDate";
import Card from "../UI/Card";
import "../expenses/ExpenseItem.css";

const ExpenseForm = () => {
  const [enteredTitle, titleAdded] = useState("");
  const [enteredAmount, amountAdded] = useState("");
  const [enteredDate, DateAdded] = useState("");

  const any_name = (first, second) => {
    if (first === "title") titleAdded(second);
    else if (first === "amount") amountAdded(second);
    else DateAdded(second);
  };
  //only when first variable value matches the second var value is seen as input
  return (
    <div>
      <form>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => any_name("title", event.target.value)}
          ></input>
          <p>{enteredTitle}</p>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => any_name("amount", event.target.value)}
          ></input>
          <p>{enteredAmount}</p>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => any_name("date", event.target.value)}
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
