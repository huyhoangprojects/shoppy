import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Button.scss';
class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Link to="/" className="link button">
          this.props.children
        </Link>
      </Router>
    );
  }
}

export default Button;
