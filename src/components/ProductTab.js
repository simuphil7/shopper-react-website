import React from "react";
import "../styles/ProductTab.css";
import { wisher, unwisher, addCart, removeCart } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import CartButton from "./AddtoCartButton";
import { Link } from "react-router-dom";
import WishButton from "../components/AddWishButton";

const ProductTab = (props) => {
  const cartlist = useSelector((state) => state.cartlist);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const forWish = (props) => {
    console.log(props);
    if (!wishlist[0].includes(props.id)) dispatch(wisher(props));
    else dispatch(unwisher(props));
  };
  const cartClick = (props) => {
    if (cartlist[0].includes(props.id)) {
      dispatch(removeCart(props));
    } else {
      dispatch(addCart(props));
    }
  };

  return (
    <div className="main-tab">
      <img className="tab-img" src={props.prod.imgsrc}></img>
      <div className="tab-info">
        <Link to={{ pathname: "/product", productInfo: props.prod.id }}>
          {" "}
          <p className="tab-title">
           <span className="tab-title-span"> {props.prod.title}</span>
            <span>: &nbsp; &nbsp;</span>
            <span>{props.prod.price}</span>
          </p>
        </Link>

        <p className="short">{props.prod.shortDes}</p>

        <div className="tab-buttons">
          <div className="but-child">
            {wishlist[0].includes(props.prod.id) ? (
              <WishButton cls="remove" click={() => forWish(props.prod)} />
            ) : (
              <WishButton cls="add" click={() => forWish(props.prod)} />
            )}
          </div>
          <div className="but-child">
            {cartlist[0].includes(props.prod.id) ? (
              <CartButton cls="remove" click={() => cartClick(props.prod)} />
            ) : (
              <CartButton cls="add" click={() => cartClick(props.prod)} />
            )}
          </div>
          <div className="but-child">
            <Link to="/buynow">
              {" "}
              <button className="act-button">Buy Now</button>
            </Link>
          </div>
          <div className="tab-space"></div>
        </div>
        <div className="tab-space"></div>
      </div>
    </div>
  );
};

export default ProductTab;
