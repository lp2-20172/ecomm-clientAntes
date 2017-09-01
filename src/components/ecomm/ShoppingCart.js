import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card';
import { connect } from 'react-redux'
import { removeFromCart } from '../../actions/ecommAction';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import DeleteIcon from 'material-ui-icons/Delete';

class ShoppingCart extends Component {

    render() {
        const { cart, removeFromCart } = this.props


        return (

            <CardContent >

                <Typography type="headline">
                    ShoppingCart List
                </Typography>

                <Typography type="subheading" color="secondary" >
                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
            </Typography>
                <div >
                    <List >
                    {cart.map((d, index) =>
                  <ListItem button  key={index}>
                    <ListItemAvatar>
                      <Avatar>
                      <img src={d.image} alt={d.name} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={d.name+" $"+d.price+"  "}
                      
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete" onClick={() => removeFromCart(d)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>,
                )}

                    </List>
                </div>


            </CardContent>
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

