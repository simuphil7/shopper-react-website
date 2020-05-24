import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props) => {
  const wilist = useSelector((state) => state.wishlist);
  const cartlist = useSelector((state) => state.cartlist);
  const wcount = wilist[2];
  const ccount = cartlist[3];

  const maper = (ele) => {
    if (props.now === ele.title) {
      if (ele.title === "Wishlist" && wcount != 0)
        return (
          <li className="list-item activee" key={ele.title}>
            <Link className="list-item activee" to={ele.src}>
              {ele.title}
              <span>
                <sup>{wcount}</sup>
              </span>
            </Link>
          </li>
        );
      else if (ele.title === "Cart" && ccount != 0)
        return (
          <li className="list-item activee" key={ele.title}>
            <Link className="list-item activee" to={ele.src}>
              {ele.title}
              <span>
                <sup>{ccount}</sup>
              </span>
            </Link>
          </li>
        );
      else
        return (
          <li className="list-item activee" key={ele.title}>
            <Link className="list-item activee" to={ele.src}>
              {ele.title}
            </Link>
          </li>
        );
    } else {
      if (ele.title === "Wishlist" && wcount != 0)
        return (
          <li className="list-item" key={ele.title}>
            <Link className="list-item" to={ele.src}>
              {ele.title}
              <span>
                <sup>{wcount}</sup>
              </span>
            </Link>
          </li>
        );
      else if (ele.title === "Cart" && ccount != 0)
        return (
          <li className="list-item" key={ele.title}>
            <Link className="list-item" to={ele.src}>
              {ele.title}
              <span>
                <sup>{ccount}</sup>
              </span>
            </Link>
          </li>
        );
      else
        return (
          <li className="list-item" key={ele.title}>
            <Link className="list-item" to={ele.src}>
              {ele.title}
            </Link>
          </li>
        );
    }
  };

  const listItems = props.list.map(maper);

  return (
    <ul className="head-list">
      <div className="test">{listItems}</div>
      <p className="cont">Contact: simuphil7@gmail.com</p>
    </ul>
  );
};
export default Header;

