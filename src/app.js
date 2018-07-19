import React, {Component} from 'react';
import {Route, Switch,} from 'react-router-dom';
import Header from "./components/dashboard/Header";
import SignUp from "./components/auth/RegistrationContainer";
import Login from "./components/auth/Login";
import Dummy from "./components/Dummy";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={"/dummy"} component={Dummy} />
                    <Route path={"/login"} component={Login} />
                    <Route path={"/dashboard"} component={Header} />
                    <Route path={"/"} component={SignUp} />

                </Switch>
            </div>);
    }
}

App.displayName = 'App';

export default App;
