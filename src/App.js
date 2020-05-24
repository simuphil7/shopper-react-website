import React from "react";
import Header from "./components/header";
import "./App.css";
import Card from "./components/card";
import { listItems } from "./data/headerData";
import { Carousel } from "react-bootstrap";
import { productList } from "./data/products";
import { useState } from "react";
import ReactImageAppear from "react-image-appear";

function App() {
  const [loaded, togLoad] = useState(false);

  return (
    <div className="App">
      <Header list={listItems} now={"Home"} />
      <br />
      <div className="page">
        <div className="cover-pic-div">
          {/* <img className="cover-pic" src='./images/coverpic.jpg'></img> */}
          <Carousel>
            <Carousel.Item>
              <ReactImageAppear
                className="d-block w-100"
                className="cover-pic"
                src="./images/coverpic1.jpg"
                alt="First slide"
                animation="zoomIn"
                animationDuration="1s"
                showLoader={false}
              />

              <Carousel.Caption>
                <h3>Mega Offer on Handy Bags</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ReactImageAppear
                className="d-block w-100"
                className="cover-pic"
                src="./images/coverpic2.jpg"
                alt="First slide"
                animation="zoomIn"
                animationDuration="1s"
                showLoader={false}
              />

              <Carousel.Caption>
                <h3>Enjoy this Season with Stuffed Toys</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ReactImageAppear
                className="d-block w-100"
                className="cover-pic"
                src="./images/coverpic3.jpg"
                alt="First slide"
                animation="zoomIn"
                animationDuration="1s"
                showLoader={false}
              />

              <Carousel.Caption>
                <h3>Safe and Secure Payment</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <h1 className="fpro">Featured Products</h1>

        <div className="products-div">
          <div className="cards-div">
            <div className="cards">
              {productList.map((ele) => (
                <Card key={ele.id} proData={ele} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
