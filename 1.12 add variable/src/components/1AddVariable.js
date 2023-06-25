import "./1AddVariable.css";
//all defined below are hardcoded not good for real world so we introduce variables
//variables are done using javascript
//{call_varibles_inside}
function One() {
  const dated = new Date();                                                           //.toISOString() added as date is object
  const BillFor = "car service";
  const Amount = 4000000;
  const total = 5000000;
  return (
    <div className="expense-item">
      <div>{dated.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{BillFor}</h2>
        <div>amount paid = {Amount}</div>
      </div>
      <div className="expense-item h2">amount left = {total - Amount}</div>
    </div>
  );
  //className function is used to enter css variable designing
}
export default One;
// even if we call thi function multiple time we get the same data so the usablity is limited
