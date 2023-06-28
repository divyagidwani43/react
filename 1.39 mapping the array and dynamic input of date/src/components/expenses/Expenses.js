import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        {/* 1 */}
        {/* we do not want to display this code static way or hardcoded
        but we want them to be added dynamically so that user can input as 
        many value as they want-- so we rennder our expenses that is in app.js
        ---->app.js */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        {/* 3 */}
        {/* the below is used istead of 
            <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
            />
            diff for every [] it uses map method of java s defined in ex
            maps the expenses array here so we can use that array here directly
            in this function and then the function can be called in app.js 
            now anything we update in expense array is reflected here synamically
            we need not add another[] to display it to screen
            --->app.js
            any change made in expenses array will be reflected here without any code change
            */}
        {props.items.map((expenses) => (
          <ExpenseItem
            // the item props link it to expenses array in app.js
            title={expenses.title}
            id={expenses.id}
            date={expenses.date}
            amount={expenses.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
