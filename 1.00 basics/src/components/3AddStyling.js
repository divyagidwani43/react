import "./3AddStyle.css"; //importing css to do stying using two.js code

//we have classes in css so to apply those we create classes
//must be inside div
//className = "the_name_in_CSS" to link those two classes and style accordingly
function Three() {
  return (
    <div className="expense-item">
      <div>dated - 28/03/2023</div>
      <div className="expense-item__description">
        <h2>added styling to original bill </h2>
        <div>Status - not paid !</div>
      </div>
      <div className="expense-item__price">Rs 44,55,999</div>
    </div>
  );
}
export default Three;
