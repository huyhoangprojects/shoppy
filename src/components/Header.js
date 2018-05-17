import React from 'react';
import Logo from '../components/Logo';
import CartButton from '../components/CartButton';
import MenuButton from '../components/MenuButton';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <MenuButton />
        <Logo />
        <CartButton />
      </header>
    )
  }
}

export default Header;