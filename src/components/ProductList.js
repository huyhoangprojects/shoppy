import React, { Component } from 'react';
import Product from '../components/Product';
import './ProductList.scss';

class App extends Component {
  render() {
    const arr = [1,2,3,4];
    return (
      <div className="product-list">
        { arr.map((item, key)=> <Product key={key}/>) }
      </div>
    );
  }
}

export default App;
