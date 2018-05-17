import React, { Component } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ProductList from '../components/ProductList';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Menu />
        <ProductList />
      </div>
    );
  }
}

export default App;
