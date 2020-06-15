import React from 'react';
import NavId from './NavId';
import Axios from 'axios';
import loginController from '../../controllers/LoginController'
import Chat from './Chat/Index'


class StyleApp extends React.Component {
        state = {
                premium: false,
                email: ''
        }

        componentDidMount() {
                loginController.addUserChangedListener(this.setUser);
                loginController.recheckLogin();
        }

        componentWillUnmount() {
                loginController.removeUserChangedListener(this.setUser);
        }

        setUser = (user) => {
                this.setState({ email: user.user.email })
        }

        render() {

                return (
                        <div>
                                <NavId />
                                <Chat/>
                        </div>

                )
        }
}

export default StyleApp;
