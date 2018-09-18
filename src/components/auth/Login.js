import React, {Component} from "react";
import {Link, Redirect} from 'react-router-dom';
import "../../styles/login.scss";

export default class Login extends Component {

    handleLogin(event) {
        event.preventDefault();
        const userToLogged = {};
        userToLogged.uname = this.refs.uname.value;
        userToLogged.password = this.refs.pass.value;
        this.props.actions.loginUser(userToLogged);
    }

    render() {
        const { isAuthenticated } = this.props;
        console.log("isAuthenticated--->> ", isAuthenticated);

        return (
            <div>
                <form className="modal-content animate" onSubmit={this.handleLogin.bind(this)}>
                    <div className="imgcontainer">
                        <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
                    </div>
                    <div className="container">
                        <If condition={isAuthenticated}>
                            <Redirect to="/dashboard"/>
                        </If>
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" ref="uname" placeholder="Enter Username" name="uname" required/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" ref="pass" placeholder="Enter Password" name="psw" required/>

                        <button type="submit">Login</button>
                    </div>
                    <div className="container">
                        <button type="button" className="cancelbtn">
                            <Link style={{color: "black"}} to="/signup">
                                Cancel
                            </Link>
                        </button>
                        <span className="psw">
                        Forgot <a href="#">password?</a>
                    </span>
                    </div>
                </form>
            </div>
        )
    }
}