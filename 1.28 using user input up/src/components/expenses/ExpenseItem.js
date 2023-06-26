import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [any1, any2] = useState(props.title);

  function Click() {
    any2("updated");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{any1}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={Click}>title</button>
    </Card>
  );
};
export default ExpenseItem;
