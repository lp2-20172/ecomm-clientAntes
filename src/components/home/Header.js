import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="Footer">
                <h1>Hello, {this.props.title}</h1>
            </div>
        );
    }
}

export default Header;