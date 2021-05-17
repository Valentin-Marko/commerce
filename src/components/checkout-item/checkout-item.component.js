import React from "react";
import { connect } from "react-redux";
import {
  clearItem,
  decreseaItem,
  addItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";
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
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => handleDecrease()}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => handleIncrease()}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => handleRemove()}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  decreseaItem: (item) => dispatch(decreseaItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
