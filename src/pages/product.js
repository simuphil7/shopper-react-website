import React from "react";
import Header from "../components/header";
import { listItems } from "../data/headerData";
import { productList } from "../data/products";
import "../styles/product.css";
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart, wisher, unwisher, togg } from "../actions";
import CartButton from "../components/AddtoCartButton";
import WishButton from "../components/AddWishButton";
import { Link } from "react-router-dom";

const Product = (props) => {
  const wishlist = useSelector((state) => state.wishlist);
  const cartlist = useSelector((state) => state.cartlist);
  const dispatch = useDispatch();

  const forWish = (props) => {
    dispatch(togg());

    console.log(props);
    if (!wishlist[0].includes(props.id)) dispatch(wisher(props));
    else dispatch(unwisher(props));
  };
  const cartClick = (props) => {
    dispatch(togg());

    if (cartlist[0].includes(props.id)) {
      dispatch(removeCart(props));
    } else {
      dispatch(addCart(props));
    }
  };

  return (
    <div className="product-div">
      <div className="header-div">
        <Header list={listItems} now="" />
      </div>
      <div className="product-page">
        {productList
          .filter((ele) => ele.id === props.location.productInfo)
          .map((ele) => (
            <div className="card-content-div">
              <div className="pro-img">
                <img className="pro-pic" src={ele.imgsrc}></img>
              </div>
              <div className="info-div" key={ele.id}>
                <h2>{ele.title}</h2>
                <h2>price:{ele.price}</h2>
                <h3>Description:</h3>
                <p className="description">{ele.description}</p>
                <div className="action-buttons">
                  <div className="act-child">
                    {wishlist[0].includes(ele.id) ? (
                      <WishButton cls="remove" click={() => forWish(ele)} />
                    ) : (
                      <WishButton cls="add" click={() => forWish(ele)} />
                    )}
                  </div>
                  <div className="act-child">
                    {cartlist[0].includes(ele.id) ? (
                      <CartButton cls="remove" click={() => cartClick(ele)} />
                    ) : (
                      <CartButton cls="add" click={() => cartClick(ele)} />
                    )}
                  </div>
                  <div className="act-child">
                    <Link to="/buynow">
                      {" "}
                      <button className="act-botton">Buy Now</button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Product;
