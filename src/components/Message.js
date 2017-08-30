import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className="Footer">
                Message <br />

                {this.props.params.id}
            </div>
        );
    }
}

export default Message;