import React, { Component } from 'react';
import ProductList from './ecomm/ProductList';
import ShoppingCart from './ecomm/ShoppingCart';



class EComm extends Component {
  render() {
    return (
      <div>
        <div >
            <div>
              <ProductList />
            </div>
            <div >
              <ShoppingCart />
            </div>
          </div>
      </div>
    );
  }
}

export default EComm;