import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import loginController from "../../../controllers/LoginController";
import { Modal } from 'react-bootstrap';



class SettingsForm extends Component {
    state = {
        email: '',
        age: null,
        ethnicity: null,
        hairColor: null,
        style: null,
        wardrobe: null
    };
    componentDidMount() {
        console.log("componentDidMount");
        loginController.addUserChangedListener(this.setUser);

        loginController.recheckLogin();
    }

    componentWillUnmount() {
        console.log("WillUnmount");
        loginController.removeUserChangedListener(this.setUser);
    }

    setUser = (user) => {
        console.log('setUser Email- ' + user.user.email);
        this.setState({ email: user.user.email });
    }


    signup() {
        console.log("signing up");
        console.log(this.state)
        axios.post('api/set/settings', {
            email: this.state.email,
        })
            .then(function (response) {
                window.location.pathname = "/app";
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    InputValidation = (event) => {
        console.log(this.state);
        event.preventDefault();
            this.signup();
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <h2>Continue to Dashboard</h2>
                            <p>Add Account Settings Here</p>
                            <br />
                            <form>
                     
                                <br />
                                <Link className="submit" to="/app"><button type="button" id="submitSettings" className="btn btn-dark" onClick={this.InputValidation}>Submit</button></Link>
                                <div className="col-md-2" />
                            </form>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Body>
                                        <div>
                                            <h5 className='row'>Warning.</h5>
                                        </div>
                                    </Modal.Body>
                                </Modal.Header>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default SettingsForm;
