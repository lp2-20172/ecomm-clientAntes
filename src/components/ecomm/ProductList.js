import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';


import { connect } from 'react-redux'
import { addToCart, loadProducts } from '../../actions/ecommAction';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
});

class ProductList extends Component {
    componentWillMount() {
        this.props.loadProducts()
    }


    render() {
        const { products, addToCart } = this.props
        const classes = this.props.classes;

        return (

            <CardContent>
                <Typography type="headline">
                    Product List
                </Typography>

                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <Subheader>December</Subheader>
                    </GridListTile>
                    {products.map((d, index) => (
                        <GridListTile key={d.image}>
                            <img src={d.image} alt={d.name} />
                            <GridListTileBar
                                title={d.name}
                                subtitle={<span>Price $: {d.price}</span>}
                                actionIcon={
                                    <IconButton onClick={() => addToCart(d)}>
                                        <AddShoppingCartIcon color="rgba(255, 255, 255, 0.54)" />
                                    </IconButton>
                                }

                                


                            />
                        </GridListTile>
                    ))}
                </GridList>

            </CardContent>
        );
    }
}
ProductList.propTypes = {
    classes: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductList))
