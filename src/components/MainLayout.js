import React, { Component } from 'react';
import { Link } from 'react-router'


class MainLayout extends Component {
    render() {
        return (
            <div>
                <h1>MainLayout</h1>
                {/* change the <a>s to <Link>s */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/inboxs">Inbox</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

export default MainLayout;

