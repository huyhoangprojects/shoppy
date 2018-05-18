import React, { Component } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './App.scss';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Menu />
          <div className="app-container">
            <Header />
            <Switch>
              <Route exact path="/" component={ProductDetail} />
              <Route path="/product-detail" component={ProductDetail} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
