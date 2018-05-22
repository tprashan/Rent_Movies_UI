import React, {Component} from "react";
import "../../styles/movie.scss";

export default class MovieGrid extends Component {

    state = {
        showMovieDetails: false
    };

    showDetailsPage = () => {
        this.setState({showMovieDetails: true});
    };

    render() {
        let genre = this.props.details.genre.split("|")[0];
        return (
            <div className="moviebox"
                 style={{backgroundImage: `url(${(Math.floor(Math.random() * (16 - 1)) + 1)}.png)`}}
            >
                <span className="movie-title">{this.props.details.title}</span>
                <span className="corner-ribbon">{genre}</span>
            </div>
        )
    };
};