//<div>Date</div>
//<div>expense</div>
//<div></div>
//will error as react only allows one root component here there are 3 div ie 3 root component
//SOLUTION is to wrap the above in div ie have a start and closing div arount the 3 div
//we can increase readablity by putting it into bracks() and formatting
function Two() {
  return (
    <div>
      <div>dated - 28/03/2023</div>
      <div>
        <h2>original bill </h2>
        <div>Rs 44,55,999</div>
      </div>
      <div>Status - not paid !</div>
    </div>
  );
}
export default Two;
