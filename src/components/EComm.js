import React, { Component } from 'react';
import ProductList from './ecomm/ProductList';
import ShoppingCart from './ecomm/ShoppingCart';
import './EComm.css';


class EComm extends Component {
  render() {
    return (
      <div className="layout">
          <div className="products">
            <ProductList />
          </div>
          <div >
            <ShoppingCart />
          </div>
      </div>
    );
  }
}

export default EComm;