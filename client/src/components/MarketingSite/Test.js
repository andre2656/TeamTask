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
    // Initialize and add the map
initMap = () => {
    // // The location of Uluru
    // var uluru = { lat: -25.344, lng: 131.036 };
    // // The map, centered at Uluru
    // var map = new google.maps.Map(
    //     document.getElementById('map'), { zoom: 4, center: uluru });
    // // The marker, positioned at Uluru
    // var marker = new google.maps.Marker({ position: uluru, map: map });
}

    render() {
        return (
            <div>
                <div>
                    <h1>Live Chat</h1>
                </div>
                <div className="card" id='uploadCard' >
                    <div className="card-header">Real-Time Algo</div>
                    <div className="card-body">
                        <h3>My Google Maps Demo</h3>
                        <div id="map"></div>
                    <p>Hello</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;