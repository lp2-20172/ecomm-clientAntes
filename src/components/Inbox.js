import React, { Component } from 'react';
import { Link } from 'react-router'
import Message from './Message';

class Inbox extends Component {
    render() {
        return (
            <div className="Footer">
                Inbox <br />
                <li><Link to="/inboxs/messages/5/" >Message 5</Link></li>
                <Message params={{ id: 'Jkei3c32' }}/>
                {this.props.children || "Welcome to your Inbox"}
                
            </div>
        );
    }
}

export default Inbox;