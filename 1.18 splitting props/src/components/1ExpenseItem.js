import './ExpenseItem.css';
import './ExpenseDate.js'
//now we can just use <ExpenseDate />
import ExpenseDate from './ExpenseDate.js';
function ExpenseItem(props) {

  return (
    <div className='expense-item'>
      <div><ExpenseDate any_date ={props.any_name_that_we_want_in_app}> </ExpenseDate>
      </div>
      <div className='expense-item__description'>
        <h2>{props.any}</h2>
        <div className='expense-item__price'>${props.any2}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

// the code could be cleaner if we divide these into components like date in different file and title and amount in different
