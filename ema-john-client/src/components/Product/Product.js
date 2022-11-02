import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // const {product, handleAddToCart} = props;
  const { img, name, seller, price, ratings } = props.product;
  //   console.log(props);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: {price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
