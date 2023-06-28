import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    console.log("event.target.value = " + event.target.value);

    // selected={filteredYear}
    //we set selected variable to filteredYear and put its value in value of <select> to make sure the default value stays 2020
    // onChangeFilter={filterChangeHandler}


    // const [filteredYear, setFilteredYear] = useState("2020");

    // const filterChangeHandler = (selectedYear) => {
    //   setFilteredYear(selectedYear);
    // };
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        {/*  */}
      </div>
    </div>
  );
};

export default ExpensesFilter;
