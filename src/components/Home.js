import React, { Component } from 'react';
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
            <div className="Home">
                <Header title={this.state.title} />
                <div className="Content">
                    <input type="text" onChange={this.handleClick} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
