import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, loadProducts } from '../../actions/ecommAction';


class ProductList extends Component {
    componentWillMount() {
        this.props.loadProducts()
    }


    render() {
        const { products, addToCart } = this.props


        return (

            <div >

                <h2>Product List</h2>
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
                        {products.map((d, index) =>
                            <tr key={index}>
                                <td><img src={d.image} alt={d.name} /></td>
                                <td>{d.name}</td>
                                <td>{d.price} <button onClick={() => addToCart(d)}> addToCart </button></td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>

            </div>
        );
    }
}
ProductList.propTypes = {
    addToCart: PropTypes.func,
    products: PropTypes.array
}

function mapStateToProps(state) {
    return {
        products: state.ecomm.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        },
        loadProducts: () => {
            dispatch(loadProducts());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
