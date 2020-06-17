import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './NavId.css';
import loginController from "../../controllers/LoginController"
class NavId extends Component {
    state = {
        user: null,
        loggedIn: true,
        DropHeight: 100
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
    UserDrop = () => {
        this.setState({DropHeight: 100})
    }
    render() {
        return (
            <div>
                <div className='row' id="navBar" >
                    <div className='col-md-4'/>
                    <div className='col-md-4' id="title" style={{textAlign: "center"}}><h2>Team Task</h2></div>
                    <div className='col-md-1'/>
                    <div className='col-md-1' />
                    <div className='col-md-1' >

                    </div>
                    <div id='UserDropdown' className='col-md-1' style={{  }}>
                        <button type="button" id="UserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.UserDrop}>
                            AC
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id='dropdownMenu'>
                            <Link className="sign-out" to="/"><button type="button" className="btn btn-light" id="signout" onClick={this.logout} value="Log out">Logout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavId;