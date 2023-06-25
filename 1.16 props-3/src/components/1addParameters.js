// now we could add parameters to javascript in these ()
//in react we use props (props=properties)

function One(prop_name) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{prop_name.any_name_1}</h2>
        <div>{prop_name.any_name}</div>
      </div>
      <div className="expense-item h2">amount = {prop_name.any_name_2}</div>
    </div>
  );
}
export default One;
