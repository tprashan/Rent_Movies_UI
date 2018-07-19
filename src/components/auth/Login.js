import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "../../styles/login.scss";

export default class Login extends Component {

    render() {
        return (
            <form className="modal-content animate">
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" onChange={this.handelChecked}/> Remember me
                    </label>
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
        )
    }
}