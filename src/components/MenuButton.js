import React, { Component } from 'react';
import './MenuButton.scss';
class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {isShow: false}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({isShow: !this.state.isShow})
  }
  render() {
    return (
      <div className={this.state.isShow ? 'menu-button open' : 'menu-button'} onClick={this.handleClick}>
        <div className="menu-button__bar menu-button__bar--01" />
        <div className="menu-button__bar menu-button__bar--02" />
        <div className="menu-button__bar menu-button__bar--03" />
      </div>
    );
  }
}

export default MenuButton;
