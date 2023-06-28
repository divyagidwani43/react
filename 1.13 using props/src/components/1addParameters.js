// now we could add parameters to javascript in these ()
//in react we use props (props=properties)
//using the parameter we can connect valyes from this file to other file using prop here we input values in variables from app.js

function One(prop_name) {
  const dated = new Date(); //.toISOString() added as date is object
  const title = "tv";
  const Amount = 799;
  return (
    <div className="expense-item">
      <div>{dated.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{prop_name.any_name_1}</h2>
        {/* any_name */}
        <div>{prop_name.any_name}</div>
      </div>
      <div className="expense-item h2">amount = {prop_name.any_name_2}</div>
    </div>
  );
}
export default One;
