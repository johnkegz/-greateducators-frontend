/** @format */

import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Slider.css";

export class Sider extends Component {
  displaySlider() {
    return (
      <OwlCarousel
        className="owl-theme"
        loop
        margin={0}
        items={6}
        autoplay={true}>
        <div class="item">
          <div class="item-container">
            <img
              src="https://image.shutterstock.com/image-vector/paper-art-carve-bird-on-600w-545824381.jpg"
              alt=""
            />
            <a href="viola.html">
              <div class="overlay">
                <div class="text">Educaotr name</div>
                <div class="text2">Educaotr title</div>
              </div>
            </a>
          </div>
        </div>
        <div class="item">
          <div class="item-container">
            <img
              src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt=""
            />
            <a href="viola.html">
              <div class="overlay">
                <div class="text">Educaotr name</div>
                <div class="text2">Educaotr title</div>
              </div>
            </a>
          </div>
        </div>
      </OwlCarousel>
    );
  }
  render() {
  return <div className="container">{this.displaySlider()}</div>;
  }
}

export default Sider;
