import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './NavId.css';
import loginController from "../../controllers/LoginController"
class NavId extends Component {
    state={
        user: null,
        loggedIn: true,
        DropHeight: 100
    }
    logout = event => {
        this.setState({ loggedIn: false });
        loginController.logout();
    }
    componentDidMount() {
        loginController.addUserChangedListener(this.setUser());
        loginController.recheckLogin();
       
    }
    componentWillUnmount() {
        loginController.removeUserChangedListener(this.setUser());
    }
    setUser = (user) => {
        this.setState({ user: user });
    }
    // UsernameInitials = () => {
    //     console.log() 
    // }
    UserDrop = () => {
        this.setState({DropHeight: 100})
    }
    render() {
        return (
            <div>
                <div id="navBar" >
                    <div className='col-md-4'/>
                    <div className='col-md-4' style={{ textAlign: "center" }}><button id='title'>Team Task</button></div>
                    
                    <div className='col-md-1'/>
                    <div className='col-md-1' />
                    <div className='col-md-1' >

                    </div>
                    <div id='UserDropdown' className='col-md-1 dropleft' style={{  }}>
                        <button type="button" id="UserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id='expandProfile' onClick={this.UserDrop}>
                            AC
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                            <Link className="sign-out" to="/" id="signout"><button onClick={this.logout} value="Log out">Logout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavId;