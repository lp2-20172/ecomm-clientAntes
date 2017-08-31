import axios from 'axios'
export const REPLACE_PRODUCTS = 'REPLACE_PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const loadProducts = () => {
  return dispatch => {
    console.log("loadProducts");
    return axios.get("https://lp2-20172.github.io/ecomm-client/products.json")
      .then(response => {
        console.log(response.data);
        dispatch({ type: REPLACE_PRODUCTS, products: response.data.products })
      });
  };
};

const addToCart = (product) => {
  return {
    type: ADD_TO_CART, 
    product
  };
};

const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART, 
    product
  };
};

export { loadProducts, addToCart, removeFromCart }