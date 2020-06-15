
import React, { Component } from "react";
import NavBar from '../NavBar/NavBar';
import Intro from './Intro';
import Test from './Test'

import './MarketingSite.css';

class MarketingSite extends Component {
    state = {
        loggedIn: false
    };
    render() {
        return (
            <div>
                <NavBar />
                <Intro />
                <Test/>
            </div>
        );
    }
}

export default MarketingSite;