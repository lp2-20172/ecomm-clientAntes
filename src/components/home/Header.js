import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography'

class Header extends Component {
    render() {
        return (
            <CardContent>
                <Typography type="headline">
                    Hello, {this.props.title}
                </Typography>


            </CardContent>
        );
    }
}

export default Header;