import Expense from "./components/1ExpenseItem"; //here we import the expense funxtion ./ means a folder up
//now the function imported can be used like normal html <h1> functin and if not used function wont execute
//      <Expense></Expense>          when called it will print whats in its component

import Two from "./components/2Expanding";
import Three from "./components/3AddStyling";

//react sees lower case start components as pre defined like <div> and upper start as made by developer <Expense>

//this is main function we can use to call components and this will be executed on web page
function App() {
  return (
    <div>
      <h1>Greeting </h1>
      <Expense></Expense>
      <Two></Two>
      <Three></Three>
      <p>Hope you have a nice day! </p>
    </div>
  ); //the above is the jsx code basically html code in js file
}

export default App;
//this export function allows us to import this file in index.js
//we will not be moving this file to component folder but instead we will treat it as root comoponent that'll access all other components
////app.js will have varioous ub components connected but this will be mai component
