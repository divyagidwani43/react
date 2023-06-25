import ExpenseItem from "./components/1ExpenseItem";
import ExpenseDate from "./components/ExpenseDate";
import './components/ExpenseItem.css';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        any_name_that_we_want_in_app={expenses[0].date}
        any={expenses[0].title}
        any2={expenses[0].amount}>
      </ExpenseItem>

      <ExpenseItem
        any_name_that_we_want_in_app={expenses[1].date}
        any={expenses[1].title}
        any2={expenses[1].amount}>
      </ExpenseItem>

      <ExpenseItem
        any_name_that_we_want_in_app={expenses[2].date}
        any={expenses[2].title}
        any2={expenses[2].amount}>
      </ExpenseItem>


      <ExpenseDate any_date={expenses[0].date} />


      <p className='expense-item'>
        <ExpenseDate
          any_date={expenses[1].date}
        ></ExpenseDate>

        <h1 className='expense-item__description'>
          {expenses[1].title}
        </h1>

        <div className='expense-item__price'>
          ${expenses[0].amount}
        </div>
      </p>


    </div>
  );
}

export default App;
