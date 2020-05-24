import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Cart from "./pages/cart";
import Wish from "./pages/wishlist";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allRed from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from "./pages/product";
import Buynow from "./pages/buynow";

let myStore = createStore(
  allRed,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={Cart} />
          <Route path="/wishlist" component={Wish} />
          <Route path="/product" component={Product} />
          <Route path="/buynow" component={Buynow} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
