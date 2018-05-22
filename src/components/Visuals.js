import React, {Component} from "react";
import "../styles/visuals.scss";
import PieChart from "./charts/Chart";
import groupBy from "group-by";

export default class Visuals extends Component {

    state = {
        movies: this.props.movies,
        genreWithCount: null
    };

    componentWillMount() {
        let genre = groupBy(this.state.movies, 'genre');
        let genreCount = Object.keys(genre).map((key) => {
            return {genre: key, value: genre[key].length};
        });
        this.setState({genreWithCount: genreCount});
    }

    render() {
        return(
            <div className="m-rental-container">
                <div className="chart">
                    <If condition={this.state.genreWithCount !== null}>
                        <PieChart genres={this.state.genreWithCount}/>
                        <span style={{marginTop: "300px"}}>Pie Chart to represent the ratio of genre of movies</span>
                    </If>
                </div>

                <div className="chart">BarChart</div>
            </div>
        )
    }
}