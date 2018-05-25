import React, {Component} from "react";

export default class TableRow extends Component {
    render(){
        return(
            <tr id="row">
                <td>{this.props.details.title}</td>
                <td>{this.props.details.genre}</td>
                <td>{this.props.details.year}</td>
            </tr>
        )
    }

}