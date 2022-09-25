import React from "react";

const Cart = ({cart}) => {
  return (
    <div>
      <h3>Order summery</h3>
      <p>Selected Products: {cart.length}</p>
    </div>
  );
};

export default Cart;
