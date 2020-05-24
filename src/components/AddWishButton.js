import React from "react";
import "../styles/AddWishButton.css";

const AddtoWishButton = (props) => {
  return props.cls === "add" ? (
    <button className="wish-butt wish" onClick={props.click}>
      Wishlist
    </button>
  ) : (
    <button className="wish-butt unwish" onClick={props.click}>
      Remove
    </button>
  );
};

export default AddtoWishButton;
