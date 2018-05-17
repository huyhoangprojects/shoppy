import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import './Logo.scss';

class Logo extends Component {
  render() {
    return (
      <Router>
        <Link to="/" className="logo">
          <img src={logo} className="logo__image" alt="Logo Shoppy" />
        </Link>
      </Router>
    );
  }
}

export default Logo;
