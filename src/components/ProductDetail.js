import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Slider from 'react-slick';
import './ProductDetail.scss';

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

class ProductDetail extends Component {
  render() {
    const sliderPreview = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    const carouselPreview = {
      dots: false,
      speed: 500,
      centerMode: true,
      centerPadding: "0px",
      slidesToShow: 3,
      slidesToScroll: 1
    }
    return (
      <div className="product-detail">
        <h1 className="product-detail__name">Nike Air Zoom Pegasus 35</h1>
        <button className="product-detail__like">
          <FontAwesome name="heart-o"/>
        </button>
        <div className="product-detail__slider">
          <Slider {...sliderPreview}>
            <img className="image" src="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/iidml7x8dpmoxkotaxpq/air-zoom-pegasus-35-little-big-kids-running-shoe-3NBxDx.jpg" alt="" />
            <img className="image" src="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/iidml7x8dpmoxkotaxpq/air-zoom-pegasus-35-little-big-kids-running-shoe-3NBxDx.jpg" alt="" />
            <img className="image" src="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/iidml7x8dpmoxkotaxpq/air-zoom-pegasus-35-little-big-kids-running-shoe-3NBxDx.jpg" alt="" />
          </Slider>
        </div>
        <div className="choice choice--size">
          <h4 className="choice__title">
            Size
          </h4>
          <div className="choice__option">
            <Slider {...carouselPreview}>
              <div>7</div>
              <div>8</div>
              <div>8.5</div>
              <div>9</div>
              <div>10</div>
            </Slider>
          </div>
        </div>
        <div className="choice choice--color">
          <h4 className="choice__title">
            Color
          </h4>
          <div className="choice__option">
            <Slider {...carouselPreview}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
