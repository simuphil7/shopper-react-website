import React from "react";
import "../styles/buynow.css";
import Header from "../components/header";
import { listItems } from "../data/headerData";

const Buynow = () => {
  return (
    <div className="buy-div">
      <div className="header-div">
        <Header list={listItems} now="" />
      </div>
      <div className="buy-page">
        <div className="form-page">
          <form>
            <div className="form-container">
              <div className="personal-information">
                <h1>Payment Information</h1>
              </div>
              <input
                id="column-left"
                type="text"
                required="required"
                name="first-name"
                placeholder="First Name"
              />
              <input
                id="column-right"
                type="text"
                name="last-name"
                required="required"
                placeholder="Last Name"
              />
              <input
                id="input-field"
                type="text"
                name="number"
                required="required"
                placeholder="Card Number"
              />
              <input
                id="column-left"
                type="text"
                name="expiry"
                required="required"
                placeholder="MM / YY"
              />
              <input
                id="column-right"
                type="text"
                required="required"
                name="cvc"
                placeholder="CCV"
              />
            </div>
            <div class="card-wrapper"></div>
            <input
              id="input-field"
              type="text"
              name="Address"
              required="required"
              autocomplete="on"
              maxlength="45"
              placeholder="Address"
            />
            <input
              id="column-left"
              type="text"
              name="city"
              required="required"
              autocomplete="on"
              maxlength="20"
              placeholder="City"
            />
            <input
              id="column-right"
              type="text"
              name="Pincode"
              required="required"
              autocomplete="on"
              pattern="[0-9]*"
              maxlength="5"
              placeholder="PIN code"
            />
            <input
              id="input-field"
              type="email"
              name="email"
              required="required"
              autocomplete="on"
              maxlength="40"
              placeholder="Email"
            />
            <input id="input-button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Buynow;
