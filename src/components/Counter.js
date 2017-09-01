import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import DeleteIcon from 'material-ui-icons/Delete';

import { increment, decrement } from '../actions/counterAction'
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        const { increment, decrement, n } = this.props
        return (

            <Card >
                <CardContent>
                    <Typography type="headline">
                        n={n}
                    </Typography>
                    <Button fab color="primary" aria-label="add" onClick={() => increment(n)}>
                        <AddIcon />
                    </Button>
                    <Button fab color="accent" aria-label="edit" onClick={() => decrement(n)}>
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card >
        );
    }
}
Counter.propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
    n: PropTypes.number.isRequired
}

function mapStateToProps(state) {
    return {
        n: state.counter.n
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (n) => { dispatch(increment(n)) },
        decrement: (n) => { dispatch(decrement(n)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
