import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const b = function () {
    console.log("hii");
  };
  {
    /*same can be done using function b (){console.log('hii')}*/
  }
  const c = function () {
    prompt("enter a number");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 onClick={b}>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        onClick={() => {
          console.log("hi");
        }}
      >
        b1
      </button>{" "}
      {/*the function will print hii to console when button is clicked */}
      <button onClick={b}>b2</button>{" "}
      {/*will do the same but the funtion is stored in const */}
      <button onClick={c}>b3</button>
    </Card>
  );
};

export default ExpenseItem;
