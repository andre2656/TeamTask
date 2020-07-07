import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Chat from './Chat/Index'

class LiveChat extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: true,
        };
    }

    handleClose() {
        this.setState({ show: true });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <p>
                    Live Chat
                </p>
            </div>
        );
    }
}

export default LiveChat;