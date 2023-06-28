import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [any1, any2] = useState(props.title);
  /* any1 = the value inside() || any2 = the value we will set will be equated to value in ()after its called  */
  function Click() {
    /*the click function changes title to updated when called */
    any2("updated");
    /*any2 must be called as a function */
  }
  const [price, now] = useState(props.amount);
  function change() {
    const b = Number(prompt("enter discount percent "));
    now(price - ((b / 100) * price));
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{any1}</h2>
        {/*any1 is props.title and it will change value to any2 when any 2 is called by calling change title function*/}
        <div className="expense-item__price">${price}</div>
      </div>
      <button onClick={Click}>change title</button>
      {/*now when we click the click function will run */}
      <button onClick={change}>b1</button>
    </Card>
  );
};
//now here title must change when button is clicked but it wont
export default ExpenseItem;
