import React from "react";
import { products } from "../helpers/productLists";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export const Products = () => {
  const { preview, setPreview } = useContext(ProductContext);

  const handleOnClick = (item) => {
    setPreview(item);
  };

  console.log(preview);
  return (
    <>
      <div>
        <ul className="productGrid">
          {products.map((item, id) => (
            <li key={id} className="productBox">
              <h6>{item.name}</h6> <br />
              <img src={item.imageURL} alt="img" /> <br />
              <br />
              <h6>₹{item.price}</h6>Ratings-
              {item.rating} | {item.discount} off
              <Link to="/preview">
                <button
                  className="btn btn-success mx-4"
                  onClick={() => handleOnClick(item)}
                >
                  Preview
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
