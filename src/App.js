import "./App.css";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import React, { useState } from "react";
import { ProductPreview } from "./components/ProductPreview";
import { ProductContext } from "./context/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";

function App() {
  const [preview, setPreview] = useState("");
  var allProducts = [];

  return (
    <>
      <ProductContext.Provider value={{ preview, setPreview, allProducts }}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Products />}></Route>
            <Route exact path="/preview" element={<ProductPreview />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </Router>
      </ProductContext.Provider>
    </>
  );
}

export default App;
