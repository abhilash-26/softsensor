import React from "react";
import "./ProductCard.css";
import { useHistory } from "react-router";

const ProductCard = ({ allProduct, addToCart }) => {
  const history = useHistory();
  return (
    <>
      {allProduct && (
        <div className="container">
          <p className="title">{allProduct.title}</p>
          <img className="product_image" src={allProduct.image} />
          <p className="price">
            <span style={{ fontWeight: "600", fontSize: "20px" }}>Price:</span>{" "}
            {allProduct.price}
          </p>
          <button className="add_button" onClick={() => addToCart(allProduct)}>
            Add to Cart
          </button>
          <p className="description">Product description:</p>
          <p> {allProduct.description}</p>
        </div>
      )}
    </>
  );
};

export default ProductCard;
