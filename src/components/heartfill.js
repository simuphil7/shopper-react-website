import React from "react";
import "../styles/heartfill.css";

const HeartFill = (props) => {
  return <div className="heartfill" onClick={props.tog}></div>;
};

export default HeartFill;
