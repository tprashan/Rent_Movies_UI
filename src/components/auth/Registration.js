import React, {Component} from "react";
import {Link, Redirect} from 'react-router-dom';
import "../../styles/signup.scss";

export default class Registration extends Component {

    clearForm() {
        this.refs.name.value = null;
        this.refs.email.value = null;
        this.refs.pass.value = null;
        this.refs.re_pass.value = null;
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {};
        user.uname = this.refs.name.value;
        user.email = this.refs.email.value;
        user.password = this.refs.pass.value;
        user.re_password = this.refs.re_pass.value;
        this.props.actions.signUpUser(user);
        this.clearForm();
    }

    render() {
        const { status } = this.props;
        return (
            <div>
                <Link className="" to="/login">Login</Link>
                <form className="signupcontainer" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <If condition={status === "User already exist"}>
                            <p className="error-msg">User already exist.</p>
                        </If>
                        <If condition={status === "Saved"}>
                            <Redirect to="/dashboard" />
                        </If>
                        <label><b>User Name</b></label>
                        <input type="text" ref="name" placeholder="User Name" name="username" required/>

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" ref="email" placeholder="Enter Email" name="email" required/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" ref="pass" placeholder="Enter Password" name="password" required/>

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" ref="re_pass" placeholder="Repeat Password" name="psw-repeat" required/>

                        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                        <div className="clearfix">
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};