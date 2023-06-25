//this is the first file thats exected when u load the page not the exact code in here but the transformed version
//we import export cause if we define a function in a and we wanna use it in b and split code across multiple files to keep files clean then we export feature from a and import it in b
//it is seen as good practise to have different components in diff folder and then import themm touse them
import ReactDOM from "react-dom/client"; // we are importing react-dom from one of the dependencies react-dom/client we import a function here

import "./index.css"; //here we import a css file which would not work in javas //this function includes this css file and injects it code here
import App from "./App.js"; //we export app.js so we can import it here

const root = ReactDOM.createRoot(document.getElementById("root")); //this is used to connect the html file in public that has and id root in div  // we use the imported react dom and call a function pn it (createRoot) it is the main entry point it tells react where the application must be placed in web page
root.render(<App />);
