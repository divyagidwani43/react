import React, { useState } from "react";
import "./expenseForm.css";
import "./newExpense.css";
import Card from "../UI/Card";
import "../expenses/ExpenseItem.css";

const ExpenseForm = () => {
  // const [enteredTitle, titleAdded] = useState("");
  // let titleChange = (event) => {
  //   titleAdded(event.target.value);
  // };
  // const [enteredAmount, amountAdded] = useState("");
  // const [enteredDate, DateAdded] = useState("");
  //can be combined -->
  const [userInput, AddUserInput] = useState({
    amountAdded: '',
    DateAdded: '',
    titleAdded: ''
  })

  const amount = (event) => {
    AddUserInput({
      ...userInput                                    //if this not added the other 2keys of date and title will get lost and the amountAdded will replace the values this basically copies the above object
      , amountAdded: event.target.value
    })
  };
  const date = (event) => {
    AddUserInput({
      ...userInput
      , dateAdded: event.target.value
    })
  };

  //another way -->
  //this is most preffered when we depend on previous states like above we use userInput to make sure the values don't get lost and overwrite the values
  //the below one is more preffered it is const = (event) => { func_name((prevState)=>{}) }
  const enteredTitle = (event) => {
    AddUserInput((prevState) => {
      return {
        ...prevState,
        titleAdded: event.target.value
      }
    })
  }

  return (
    <div>
      <form>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={enteredTitle}></input>
          {/* <p>{enteredTitle}</p> */}
          <p>{AddUserInput.titleAdded}</p>
          {/* wont display title */}
        </div>

        <div className="new-expense__control">
          <label>Amount of item</label>
          <input type="number" min="0.01" step="0.01" onChange={amount}></input>
          {/* <p>{userInput.amountAdded}</p> */}
          {/* is used to call the amount thats added */}
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={date}
          />
          {/* <p>{userInput.dateAdded}</p> */}
          {/* is used to call the date thats added */}
        </div>

        <div className="new-expense__control">
          <label>total bill</label>
          <p>{5 * userInput.amountAdded}</p>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>

      {/* will display below */}
      <Card className="expense-item">
        <div className="expense-item__description">
          <div>{userInput.dateAdded}</div>
          <h2>{enteredTitle}</h2>
          <div className="expense-item__price">${5 * userInput.amountAdded}</div>
        </div>
      </Card>
    </div>
  );
};
export default ExpenseForm;
