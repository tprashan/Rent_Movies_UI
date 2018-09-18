import React, {Component} from 'react';
import {Route, Switch,} from 'react-router-dom';
import Header from "./components/dashboard/Header";
import SignUp from "./components/auth/RegistrationContainer";
import LoginContainer from "./components/auth/LoginContainer";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={"/login"} component={LoginContainer} />
                    <Route path={"/dashboard"} component={Header} />
                    <Route path={"/"} component={SignUp} />

                </Switch>
            </div>);
    }
}

App.displayName = 'App';

export default App;
