import React from "react";
import "../styles/AddtoCartButton.css";

const AddtoCartButton = (props) => {
  const uncart = "<- Cart";

  return props.cls === "add" ? (
    <button className="cart-butt add" onClick={props.click}>
      {" "}
      ->Cart
    </button>
  ) : (
    <button className="cart-butt remove" onClick={props.click}>
      {uncart}
    </button>
  );
};

export default AddtoCartButton;
