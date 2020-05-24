import React from "react";
import Header from "../components/header";
import { listItems } from "../data/headerData";
import ProductTab from "../components/ProductTab";
import { useSelector, useDispatch } from "react-redux";
import "../styles/wishlist.css";
import Card from "../components/card";

const Wishlist = (props) => {
  const list = useSelector((state) => state.wishlist);
  console.log(list);

  const maper = (ele) => <ProductTab prod={ele} />;
  const products = list[1].map(maper);

  return (
    <div className="wish-div">
      <div className="header-div">
        <Header list={listItems} now={"Wishlist"} />
      </div>
      <div className="wish-page-div">
        {list[0].length != 0 ? (
          <div className="wish-ed">
            <div className="wishes">{products}</div>
            <div className="blank-wish">
              <h2>Realated Products</h2>
              <div className="card-lis">
                {" "}
                {list[1].map((ele) => (
                  <Card key={ele.id} proData={ele} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-wish">
            <img
              className="empty-wish-img"
              src="./images/broken-heart.png"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};
export default Wishlist;
