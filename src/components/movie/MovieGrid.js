import React, {Component} from "react";
import "../../styles/movie.scss";
import PropTypes from "prop-types";

export default class MovieGrid extends Component {

    static propTypes = {
        details: PropTypes.object.isRequired,
        showDetail: PropTypes.func.isRequired,
        des: PropTypes.func.isRequired,
    };

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