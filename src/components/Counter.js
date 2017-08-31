import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { increment, decrement } from '../actions/counterAction'
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        const { increment, decrement, n } = this.props
        return (

            <div >
                n={n}
                <br />
                <button onClick={() => increment(n)}> + </button>
                <button onClick={() => decrement(n)}> - </button>
            </div>
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
