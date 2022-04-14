import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export const ProductPreview = () => {
  const { preview, allProducts } = useContext(ProductContext);

  const addToCartHandler = (item) => {
    allProducts.push(item);
  };

  return (
    <div className="previewScreen">
      <h1>{preview.name}</h1>
      <img src={preview.imageURL} alt="IMG" />
      <div className="productInfo">
        <div className="price">₹{preview.price}</div>
        <div className="discount">
          {preview.discount}off{" "}
          <button className="rating">{preview.rating}⭐</button>
        </div>
        <div className="additionalInfo">
          Brand Name- {preview.brandName} | Category- {preview.category} |
          Seller Name- {preview.sellerName}
        </div>
      </div>
      <Link to="/cart">
        <button
          className="btn btn-success"
          onClick={() => addToCartHandler(preview)}
        >
          {" "}
          Add to Cart
        </button>
      </Link>
    </div>
  );
};
