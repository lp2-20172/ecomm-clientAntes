import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeFromCart } from '../../actions/ecommAction';


class ShoppingCart extends Component {

    render() {
        const { cart, removeFromCart } = this.props


        return (

            <div >

                <h2>ShoppingCart</h2>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((d, index) =>
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{d.name}</td>
                                <td>{d.price} <button onClick={() => removeFromCart(d)}> x </button></td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">


                                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
                            </td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        );
    }
}
ShoppingCart.propTypes = {
    removeFromCart: PropTypes.func,
    cart: PropTypes.array
}

function mapStateToProps(state) {
    return {
        cart: state.ecomm.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (product) => {

            console.log("REMOVE_FROM_CART " + product.name)
            dispatch(removeFromCart(product))


        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

