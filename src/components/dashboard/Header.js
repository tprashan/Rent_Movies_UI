import React, {Component} from "react";
import '../../styles/app.scss';
import TabComponent from "../Tabs/TabComponentContainer";

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-text">
                        <h1 style={{marginTop: "-10px"}}>Welcome To Movie Rental</h1>
                    </div>
                </div>
                <TabComponent/>
            </div>
        )
    };
}