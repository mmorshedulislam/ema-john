import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { img, name, price, shipping, quantity } = product;
  //   console.log(product);
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-container">
        <div className="review-details">
          <h5>{name}</h5>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div
          onClick={() => handleRemoveItem(product._id)}
          className="review-delete-btn"
        >
          <button className="delete-btn">
            <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
