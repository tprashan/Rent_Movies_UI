import React, {Component} from 'react';
import {Route, Switch,} from 'react-router-dom';
import Header from "./components/dashboard/Header";
import { LoadableMovieList }  from "./components/LoadComponents";


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={"/"} component={Header} />
                </Switch>
            </div>);
    }
}

App.displayName = 'App';

export default App;
