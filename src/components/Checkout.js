import React from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <div className="checkoutContainer">
      <h2>Place Your Order</h2>
      <input type="text" placeholder="Name" required />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="pass"
        id="pass"
        placeholder="Password"
        required
      />
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        required
      />
      <input
        type="number"
        name="phone1"
        id="phone1"
        placeholder="Alternate Number"
        required
      />
      <textarea
        name="address"
        id="address"
        cols="30"
        rows="6"
        placeholder="Address"
        required
      ></textarea>
      <Link to="/">
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={() => alert("order placed")}
        >
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};
