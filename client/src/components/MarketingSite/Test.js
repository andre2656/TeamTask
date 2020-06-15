import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import Chat from './Chat/Index'

class Test extends Component {
    // constructor(props, context) {
    //     super(props, context);

    //     this.handleShow = this.handleShow.bind(this);
    //     this.handleClose = this.handleClose.bind(this);

    //     this.state = {
    //         show: false,
    //     };
    // }

    // handleClose() {
    //     this.setState({ show: false });
    // }

    // handleShow() {
    //     this.setState({ show: true });
    // }

    render() {
        return (
            <div>
                <div>
                    <h1>Live Chat</h1>
                </div>
                <div className="card" id='uploadCard' >
                    <div className="card-header">Real-Time Algo</div>
                    <div className="card-body">

                    <p>Hello</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;