import { REPLACE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART} from '../actions/ecommAction'

const initialState = {
	products: [],
	cart: []
};

const ecommReducers = (state = initialState, action) => {
	if (action.type === REPLACE_PRODUCTS) {
		return {
			...state,
			products: action.products
		};
	} else if (action.type === ADD_TO_CART) {
		return {
			...state,
			cart: state.cart.concat(action.product)
		}
	} else if (action.type === REMOVE_FROM_CART) {
		return {
			...state,
			cart: state.cart.filter(product => product.id !== action.product.id)
		}
	}
	return state;
}


export default ecommReducers