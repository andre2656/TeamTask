import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './NavId.css';
import loginController from "../../controllers/LoginController"

class NavId extends Component {
    state = {
        user: null,
        loggedIn: true
    }
    logout = event => {
        this.setState({ loggedIn: false });
        loginController.logout();
    }
    componentDidMount() {
        loginController.addUserChangedListener(this.setUser);
        loginController.recheckLogin();
    }
    componentWillUnmount() {
        loginController.removeUserChangedListener(this.setUser);
    }
    setUser = (user) => {
        this.setState({ user: user });
        console.log('helllloooo')
        this.UsernameInitials(user)
    }
    UsernameInitials = (user) => {
        console.log(user+ ' hello  sdf' + user.firstName) 
    }
    render() {
        return (
            <div>
                <div className='row' id="navBar">
                    <div id='Wrapper'>
                        <div className='card' id='Card'>
                            <div className='col-md-12'>
                                <p id='cardHeader'>Personnel</p>
                            </div>
                            <div className='row' id='Presonnel'>
                                <div id='personnelWrapper'>
                                    <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        TC
                                </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <p id='Name'>Terrence Campbell </p>
                                        <p id='Position'> Creative Direction</p>
                                        <p id='Email'>TCamp0171@gmail.com</p>
                                        <p id='Phone'>(949)345-9836</p>
                                    </div>
                                </div>
                                <div id='personnelWrapper'>
                                    <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        TC
                                </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <p id='Name'>Helen Aguilar</p>
                                        <p id='Position'>Costume/Prop</p>
                                        <p id='Email'>example@email.com</p>
                                        <p id='Phone'>(310)555-1234</p>
                                    </div>
                                </div>
                                <div id='personnelWrapper'>
                                    <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        TC
                                </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <p id='Name'>Nasim Campbell</p>
                                        <p id='Position'>Styling</p>
                                        <p id='Email'>example@email.com</p>
                                        <p id='Phone'>(310)555-1234</p>
                                    </div>
                                </div>
                                <div id='personnelWrapper'>
                                    <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        TC
                                </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <p id='Name'>Kwe Johnson</p>
                                        <p id='Position'>Photographer</p>
                                        <p id='Email'>example@email.com</p>
                                        <p id='Phone'>(310)555-1234</p>
                                    </div>
                                </div>
                                <div id='personnelWrapper'>
                                    <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        TC
                                </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <p id='Name'>TBD</p>
                                        <p id='Position'>Hair/Make Up</p>
                                        <p id='Email'>example@email.com</p>
                                        <p id='Phone'>(310)555-1234</p>
                                    </div>
                                </div>
                                <div id='personnelWrapper'>
                                    <button type="button" id="personnelDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        TC
                                </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <p id='Name'>TBD</p>
                                        <p id='Position'>CPA</p>
                                        <p id='Email'>example@email.com</p>
                                        <p id='Phone'>(310)555-1234</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5' id="title"><h2>Team Task</h2></div>
                    <div className="col-md-1" />
                    <div className='col-md-3' id="welcome-text"> {this.state.user ? <div>Welcome {this.state.user.user.firstName}!</div> : null}</div>
                    <Link className="sign-out" to="/"><button type="button" className="btn btn-light" id="signout" onClick={this.logout} value="Log out">Log out</button></Link>
                    <div className='col-md-1' />
                </div>
            </div>
        );
    }
};

export default NavId;