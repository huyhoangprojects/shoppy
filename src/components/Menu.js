import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Menu.scss';

class Menu extends React.Component {
  render() {
    return (
      <Router>
        <nav className="nav">
          <ul className="menu">
            <li className="menu__item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/"className="link">
                Wallet
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/"className="link">
                Branchs
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/"className="link">
                Buy
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/"className="link">
                Profile
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/"className="link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </Router>
    )
  }
}

export default Menu;