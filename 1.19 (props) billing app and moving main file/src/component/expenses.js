import ExpenseItem from "./ExpenseItem";
function One(props) {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={props.any_name[0].title}
        amount={props.any_name[0].amount}
        date={props.any_name[0].date}
      ></ExpenseItem>
      {/* the title amount and date value will travel from here to enpense.item.js and get the display code */}
      <ExpenseItem
        title={props.any_name[1].title}
        amount={props.any_name[1].amount}
        date={props.any_name[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.any_name[2].title}
        amount={props.any_name[2].amount}
        date={props.any_name[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.any_name[3].title}
        amount={props.any_name[3].amount}
        date={props.any_name[3].date}
      ></ExpenseItem>
    </div>
  );
}
export default One;
