import React, { Component } from 'react';
import ProductList from './ecomm/ProductList';
import ShoppingCart from './ecomm/ShoppingCart';
import Grid from 'material-ui/Grid';


class EComm extends Component {
  render() {
    return (
      <div>
        <Grid container >
              
              <ProductList />
 
              <ShoppingCart />
  
          </Grid>
      </div>
    );
  }
}

export default EComm;