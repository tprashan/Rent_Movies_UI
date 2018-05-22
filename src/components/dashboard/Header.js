import React, {Component} from "react";
import '../../styles/app.scss';
import TabComponent from "../TabComponent";

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-text">
                        <h1>Welcome To Movie Rental</h1>
                    </div>
                </div>
                <TabComponent/>
            </div>
        )
    };
}