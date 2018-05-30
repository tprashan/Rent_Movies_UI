import React, {Component} from "react";
import "../../styles/movie.scss";

export default class MovieGrid extends Component {

    showDetailsPage = (url) => {
        this.props.showDetail(true);
        this.props.des({...this.props.details, imgUrl : url})
    };

    render() {
        let genre = this.props.details.genre.split("|")[0];
        let imgUrl = `url(${(Math.floor(Math.random() * (16 - 1)) + 1)}.png)`;
        return (
            <div className="moviebox"
                 style={{backgroundImage: imgUrl}}
                 onClick={() => this.showDetailsPage(imgUrl)}
            >
                <span className="movie-title">{this.props.details.title}</span>
                <span className="corner-ribbon">{genre}</span>
            </div>
        )
    };
};