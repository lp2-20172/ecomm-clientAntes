import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card';

import Footer from './home/Footer';
import Header from './home/Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "react redux" };
    }

    handleClick = (e) => {
        console.log('this is:', e.target.value)
        this.setState({
            title: e.target.value
        })
    }

    render() {
        return (
            <Card>
                <Header title={this.state.title} />
                <CardContent>
                    <input type="text" onChange={this.handleClick} />
                </CardContent>
                <Footer />
            </Card>
        );
    }
}

export default Home;
