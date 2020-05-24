import React from "react";
import "../styles/heart.css";

const Heart = (props) => {
  return <div className="heart" onClick={props.tog}></div>;
};

export default Heart;
