import React, {Component} from "react";
import "../styles/visuals.scss";
import PieChart from "./charts/Pie";
import groupBy from "group-by";
import LinearChart from "./charts/Linear";
import PropTypes from 'prop-types';

const propTypes = {
    movies: PropTypes.array.isRequired,
};

class Visuals extends Component {
    constructor(props) {
        super();
        this.state = {
            movies: props.movies,
            genreWithCount: null,
            yearWithCount:null,
        }
    }

    componentWillMount() {
        let genre = groupBy(this.state.movies, 'genre');
        let genreCount = Object.keys(genre).map((key) => {
            return {genre: key, value: genre[key].length};
        });
        let year = groupBy(this.state.movies, 'year');
        let yearCount = Object.keys(year).map((key) => {
            return {year: key, count: year[key].length};
        });
        this.setState({genreWithCount: genreCount, yearWithCount: yearCount});
    }

    render() {
        const {genreWithCount, yearWithCount} = this.state;

        return(
            <div className="m-rental-container">
                <div className="chart">
                    <div className="chart-pie">
                        <If condition={genreWithCount !== null}>
                            <PieChart genres={genreWithCount}/>
                            <span style={{marginTop: "300px"}}>Pie Chart to represent the ratio of genre of movies</span>
                        </If>
                    </div>
                    <div className="chart-line">
                        <If condition={yearWithCount !== null}>
                            <LinearChart years={yearWithCount}/>
                            <span style={{marginLeft: "160px"}}>Linear Chart to represent the number of movies of that year</span>
                        </If>
                    </div>
                </div>
            </div>
        )
    }
}

Visuals.propTypes = propTypes;

export default Visuals;