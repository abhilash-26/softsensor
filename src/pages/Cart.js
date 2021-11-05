import React from "react";
import CartComponent from "../components/CartComponent";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <CartComponent cartItems={cartItems} />
    </div>
  );
};

export default Cart;
