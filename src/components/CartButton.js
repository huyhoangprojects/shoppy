import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './CartButton.scss';

class Logo extends Component {
  render() {
    return (
      <Router>
        <Link to="/" className="cart-button">
          <span className="cart-button__icon">
            <FontAwesome name="shopping-bag"/>
          </span>
          <span className="cart-button__number">3</span>
        </Link>
      </Router>
    );
  }
}

export default Logo;
