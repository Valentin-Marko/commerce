import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IpAyCEG3srG4pWp7L4UNbMNDlYtwz82qfMAyh4Y5EMBIfsz6kA0hxRqkrSkmGMWUWd82dpkyBwlza5aHyzl9Fow00fOGTvHYc";

  const onToken = (token) => {
    console.log(token);
    alert("Paymen succesful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
