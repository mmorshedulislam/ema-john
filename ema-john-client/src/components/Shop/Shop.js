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

/**
 * total : loaded
 * perPage(size) : 10
 * pages : count / perPage
 * currentPage (page)
 *
 */

const Shop = () => {
  // const { products, count } = useLoaderData();

  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  // for get/set all added cart item
  const [cart, setCart] = useState([]);
  // current kon page e aso
  const [cPage, setcPage] = useState(0);
  // koto gula data dekabo
  const [size, setSize] = useState(10);
  const pages = Math.ceil(count / size);
  useEffect(() => {
    const uri = `http://localhost:5000/products?page=${cPage}&size=${size}`;
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [cPage, size]);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const ids = Object.keys(storedCart);
    console.log(ids);

    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("by ids", data);
      });

    // ager local system e cilo
    for (const id in storedCart) {
      const addedProduct = products.find((product) => id === product._id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  // addToCart button e data patanor jonno
  const handleAddToCart = (selectedProduct) => {
    // console.log(selectedProduct);
    // console.log(cart);
    // do not do this: cart.push(product);

    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    // const newCart = [...cart, selectedProduct];
    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
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
      <div className="pagination">
        <p>
          Current page: {cPage} Size: {size}
        </p>
        {[...Array(pages).keys()].map((number) => (
          <button
            key={number}
            className={cPage === number && "selected"}
            onClick={() => setcPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select onChange={(event) => setSize(event.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
