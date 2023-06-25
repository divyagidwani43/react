import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let title = props.title;
  function Click(){
    title = 'hi';
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
      <button onClick = {Click}>change title</button>
        <h2 >{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      </Card>
  );
};
//now here title must change when button is clicked but it wont
export default ExpenseItem;
