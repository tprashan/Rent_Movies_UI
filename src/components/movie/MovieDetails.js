import React, {Component} from "react";

export default class MovieDetails extends Component {
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