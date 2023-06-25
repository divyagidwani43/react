import React from "react";

export default function Product(prop) {
  return (
    <article className="product">
      <h2>{prop.title}</h2>
      <p className="price">${prop.price}</p>
      <p>{prop.Description}</p>
    </article>
  );
}
