import React, {Component} from "react";
import PropTypes from "prop-types";

export default class TableRow extends Component {
    static propTypes = {
        details: PropTypes.object.isRequired,
    };

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