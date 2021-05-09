import React from "react";
import { connect } from "react-redux";
import {
  clearItem,
  decreseaItem,
  addItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";
const CheckoutItem = ({ clearItem, cartItem, decreseaItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  console.log("quantity");
  function handleRemove() {
    clearItem(cartItem);
  }

  function handleDecrease() {
    decreseaItem(cartItem);
  }

  function handleIncrease() {
    addItem(cartItem);
  }

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => handleDecrease()}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => handleIncrease()}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => handleRemove()}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  decreseaItem: (item) => dispatch(decreseaItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
