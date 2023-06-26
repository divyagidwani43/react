import React from "react";
import "./expenseForm.css";
import "./newExpense.css";

const ExpenseForm = () => {
  const titleChange = (event) => {
    const titleAdded = event.target.value;
    console.log(titleAdded);
  }
  return (
    <form>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChange}></input>
        {/*every time u stroke a key and input title block it prints that to console 
        no need to press enter */}
        <p>{ }</p>
      </div>

      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" />
      </div>

      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" />
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
