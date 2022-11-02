import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, InitialCart } = useLoaderData();
  const [cart, setCart] = useState(InitialCart);
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.length === 0 && (
          <h2>
            You have not selected any item. Go to <Link to={"/"}>Shop</Link>
          </h2>
        )}
        <div>
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to={"/shipping"}>
            <button>Proceed Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
