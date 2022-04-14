import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { allProducts } = useContext(ProductContext);

  return (
    <div className="cart">
      {allProducts.map((item, id) => (
        <li key={id} className="productBox">
          <h6>{item.name}</h6> <br />
          <img src={item.imageURL} alt="img" /> <br />
          <br />
          <h6>₹{item.price}</h6>Ratings-
          {item.rating} | {item.discount} off
        </li>
      ))}
      <Link to="/checkout">
        <button className="btn btn-success">Check Out</button>
      </Link>
      <Link to="/">
        <button className="btn btn-primary mx-3">Shop More</button>
      </Link>
    </div>
  );
};
