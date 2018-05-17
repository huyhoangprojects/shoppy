import React, { Component } from 'react';
import Logo from '../components/Logo';
import CartButton from '../components/CartButton';
import MenuButton from '../components/MenuButton';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <MenuButton />
        <Logo />
        <CartButton />
      </div>
    );
  }
}

export default App;
