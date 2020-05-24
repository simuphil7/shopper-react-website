import React from "react";
import "../styles/card1.css";
import HeartFill from "./heartfill";
import Heart from "./heart";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { wisher, unwisher, togg, addCart, removeCart } from "../actions";
import CartButton from "./AddtoCartButton";
import { Link } from "react-router-dom";
import ReactImageAppear from "react-image-appear";

const Card = (props) => {
  const [tick, toggtick] = useState(false);

  const wishlis = useSelector((state) => state.wishlist);
  const cartlist = useSelector((state) => state.cartlist);

  const dispatch = useDispatch();
  const heartClick = () => {
    dispatch(togg());

    if (!wishlis[0].includes(props.proData.id)) {
      dispatch(wisher(props.proData));
    } else {
      dispatch(unwisher(props.proData));
    }
  };
  const cartClick = () => {
    dispatch(togg());
    console.log(cartlist[0].includes(props.proData.id));
    if (cartlist[0].includes(props.proData.id)) {
      dispatch(removeCart(props.proData));
    } else {
      dispatch(addCart(props.proData));
    }
  };

  return (
    <div className="card">
      <Link to={{ pathname: "/product", productInfo: props.proData.id }}></Link>

      {tick === false ? (
        <div className="unflipp">
          <div className="peek-img">
            <div
              onClick={() => {
                toggtick(!tick);
              }}
            >
              <ReactImageAppear
                className="tile-pic"
                src={props.proData.imgsrc}
                animation="bounceIn"
                animationDuration="1s"
                showLoader={false}
              />
            </div>
          </div>

          <div className="heart-div1">
            {wishlis[0].includes(props.proData.id) ? (
              <HeartFill tog={heartClick} />
            ) : (
              <Heart tog={heartClick} />
            )}
          </div>
        </div>
      ) : (
        <div className="flipper">
          <div className="flip-div">
            <img className="flip-tile-pic" src={props.proData.imgsrc}></img>
            <p
              className="cross"
              onClick={() => {
                toggtick(!tick);
              }}
            >
              X
            </p>
            <div className="flip-title-div">
              <p className="flip-title">
                {" "}
                <Link
                  to={{ pathname: "/product", productInfo: props.proData.id }}
                >
                  <span className="title-pad">{props.proData.title}</span>
                </Link>
                <span>
                  <br></br>
                </span>
                {props.proData.price}
              </p>
            </div>
            <Link to="/buynow">
              {" "}
              <button className="act-button1">Buy Now</button>
            </Link>
            <div className="act-button2">
              {cartlist[0].includes(props.proData.id) ? (
                <CartButton
                  cls="remove"
                  click={() => cartClick(props.proData)}
                />
              ) : (
                <CartButton cls="add" click={() => cartClick(props.proData)} />
              )}
            </div>
          </div>
          <div className="heart-div2">
            {wishlis[0].includes(props.proData.id) ? (
              <HeartFill tog={heartClick} />
            ) : (
              <Heart tog={heartClick} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
