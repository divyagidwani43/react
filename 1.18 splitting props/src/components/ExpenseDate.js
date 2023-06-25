//would be acessed using date in app.js div
//and <expenseDate /> in expenseItem
import './ExpenseDate.css'
function ExpenseDate(props1){
  let month = props1.any_date.toLocaleString('en-US', { month: 'long' });
  let day = props1.any_date.toLocaleString('en-US', { day: '2-digit' });
  let year = props1.any_date.getFullYear();
  return <div className="expense-date">
  <div className="expense-date__month">{month}</div>
  <div className="expense-date__year">{year}</div>
  <div className="expense-date__day">{day}</div>
</div>
}

export default ExpenseDate;