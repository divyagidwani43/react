import React from "react";

import Product from "./product";
import "./index.css";

const pro = [
  {
    Title: "Product 1",
    Price: 10,
    Description: "First Product"
  },
  {
    Title: "Product 2",
    Price: 20,
    Description: "Second Product"
  }
];

// don't change the Component name "App"
export default function App() {
  return (
    <div>
      <h1>My Demo Shop</h1>
      <Product
        title={pro[0].Title}
        price={pro[0].Price}
        Description={pro[0].Description}
      ></Product>
      <Product
        title={pro[1].Title}
        price={pro[1].Price}
        Description={pro[1].Description}
      ></Product>
    </div>
  );
}
