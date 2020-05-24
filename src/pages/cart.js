import React from "react";
import "../styles/cart.css";
import Header from "../components/header";
import ProductTab from "../components/ProductTab";
import { listItems } from "../data/headerData";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const list = useSelector((state) => state.cartlist);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  console.log(list);

  const maper = (ele) => <ProductTab prod={ele} />;
  const products = list[1].map(maper);
  const biller = (ele) => (
    <div className="billItem">
      <h3 className="bill-title">{ele.title}</h3>
      <h3 className="bill-price">{ele.price}</h3>
    </div>
  );

  const listbill = list[1].map(biller);

  return (
    <div className="main-cart">
      <div className="header-div">
        <Header list={listItems} now={"Cart"} />
      </div>
      {list[2] != 0 ? (
        <div className="cart-page">
          <div className="cart-list">{products}</div>
          <div className="bill-div">
            <div className="bill-head">
              <h1 className="bill-head-title">Bill Cart</h1>
              <div className="bill-img-div">
                <img className="bill-img" src="./images/bill.png"></img>
              </div>
            </div>
            <hr className="rule" />

            {listbill}
            <hr />
            <div className="total-div">
              <h3 className="total-title">Total</h3>

              <h3 className="total-value">
                <span>$</span>
                {list[2]}
              </h3>
            </div>
            <Link to="/buynow">
              {" "}
              <button className="buy-butt">Buy Now</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="empty-div">
          <div className="iniCart">
            <img src="./images/empty-cart.png"></img>
          </div>
          <div className="firstCart">
            <img src="./images/empty-cart.png"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
