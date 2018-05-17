import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './Product.scss';
class Product extends Component {
  render() {
    return (
      <Router>
        <div className="product">
          <h3 className="product__name">Nike Air Zoom Pegasus 35</h3>
          <button className="product__like">
            <FontAwesome name="heart-o"/>
          </button>
          <button className="product__cart">
            <FontAwesome name="shopping-bag"/>
          </button>
          <Link to="/" className="link product__image">
            <img className="image" src="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/iidml7x8dpmoxkotaxpq/air-zoom-pegasus-35-little-big-kids-running-shoe-3NBxDx.jpg" alt="" />
          </Link>
          <div className="price product__price">
            <span className="price__discount">$90</span>
            <span className="price__real">$75.55</span>
          </div>
        </div>
      </Router>
    );
  }
}

export default Product;
