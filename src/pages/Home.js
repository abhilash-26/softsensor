import React from "react";
import ProductPage from "../components/ProductPage";
import "./Home.css";

const Home = ({ addToCart }) => {
  return (
    <div className="home_container">
      <ProductPage addToCart={addToCart} />
    </div>
  );
};

export default Home;
