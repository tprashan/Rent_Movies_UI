import React, {Component} from "react";
import PropTypes from "prop-types";

export default class MovieDetails extends Component {

    static propTypes = {
        movie: PropTypes.object.isRequired,
    };

    render() {
        return(
            <div>
                <div  className="moviebox" style={{backgroundImage: this.props.movie.imgUrl}}>
                </div><br/>
                <span>{this.props.movie.title}</span><br/>
                <span>{this.props.movie.genre}</span><br/>
                <span>{this.props.movie.year}</span>
            </div>
        )
    }
}