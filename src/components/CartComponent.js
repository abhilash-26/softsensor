import React from "react";
import { useHistory } from "react-router";
import "./CartComponent.css";

const CartComponent = ({ cartItems }) => {
  console.log(cartItems);
  const history = useHistory();
  return (
    <div>
      <button className="back_button" onClick={() => history.push("/")}>
        Back to Product Page
      </button>
      {cartItems.length > 0 && (
        <p style={{ fontWeight: "600", fontSize: "24px" }}>
          Items in the cart:
        </p>
      )}
      {cartItems.length === 0 && <p>Cart is empty!</p>}
      {cartItems.map((item, index) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default CartComponent;
