import React, { useState } from "react";
function App() {
  const [one, two] = useState("hi");
  function state() {
    two("hello");
  }

  const [one1, two2] = useState("hi");
  function state2(event) {
    two2(event.target.value);
  }

  let [initial , final ]=useState('hi')
  function three (events){
    let a= events.target.value;
    if (a == 'america'){final('hello')}
    else if (a == 'india'){final('namaste')}
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <h1>{one}</h1>
      <button onClick={state}>b1</button>
      {/* will see the state function and change the value of one to the value set
     to two when function executes i.e onClick */}
     <h1>{one1}</h1>
    <select onChange ={state2}>
    <option>hii</option>
    <option>hello</option>
    <option>namaste</option>
    <option>greetings</option>
    </select>
    <h1>{initial}</h1>
    <select onChange ={three}>
    <option>america</option>
    <option>india</option>
    </select>
    
    </div>
  );
}

export default App;

// const [one,two]=useState('hi')

// // let a=one; //can be used to see the value
// function state(){
//   two('hello')
// }

// // const [one11,two22]=useState('hi')
// // function state3(event){
// //   if (event.target.value == 'london') two22 = 'hey';
// //   else if (event.target.value == 'india') two22='namaste'
// //   // else if (event.target.value == 'america') two22='hello'
// //   // else two22='greeting'
// // }
//  (
//   <div>
//     <h2>Let's get started!</h2>
//     <h1>{one}</h1>
//     <button onClick = {state}>b1</button>
//     {/* will see the state function and change the value of one to the value set
//     to two when function executes i.e onClick */}
    // </div>
