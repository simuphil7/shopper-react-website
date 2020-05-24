import checker from "./checker";
import wisher from "./wisher";
import carter from "./cart.js";
import { combineReducers } from "redux";

const allRed = combineReducers({
  check: checker,
  wishlist: wisher,
  cartlist: carter,
});

export default allRed;
