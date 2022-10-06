import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { Link, useLoaderData } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  /*  

  // Old system of load data

  // for get/set all products
    const [products, setProducts] = useState([]);

  // for all products load
  useEffect(() => {
    // console.log("products load before fetch");
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("loaded products");
        setProducts(data);
      });
  }, []); 

*/

  const products = useLoaderData();
  // for get/set all added cart item
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => id === product.id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  /*   
M - 49.6 e dekano hoyecilo eibabe

// for existing added product from local storage
  useEffect(() => {
    console.log("local storage first line.", products);
    const storedCart = getStoredCart();
    // console.log(storedCart);
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // console.log(addedProduct);
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
      // console.log(addedProduct);
    }
    setCart(savedCart);
    console.log("local storage finished");
  }, [products]);
 */

  // addToCart button e data patanor jonno
  const handleAddToCart = (selectedProduct) => {
    // console.log(selectedProduct);
    // console.log(cart);
    // do not do this: cart.push(product);

    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    // const newCart = [...cart, selectedProduct];
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to={`/orders`}>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
