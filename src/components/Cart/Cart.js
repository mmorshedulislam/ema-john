import React from "react";
import './Cart.css'; 


const Cart = (props) => {
  const {cart} = props;
  // console.log(cart);
  return (
    <div className="cart">
      <h3>Order summery</h3>
      <p>Selected Products: {cart.length}</p>
      <p>Total Price: </p>
      <p>Total Shipping: </p>
      <p>Tax: </p>
      <h5>Grand Total: </h5>
    </div>
  );
};

export default Cart;
