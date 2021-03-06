import React, {Component} from "react";
import Select from 'react-select';
import MovieGrid from "../movie/MovieGrid";
import "../../styles/app.scss";
import 'react-select/dist/react-select.css';
import {RadioButton, RadioGroup} from "react-radio-buttons";
import Row from "../movie/TableRow";
import MovieDetails from "../movie/MovieDetails";
import dropdownGenre from "../../constents/genres";
import dropdownYear from "../../constents/yearOfMovies";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const propTypes = {
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
    showDetailPage: PropTypes.bool.isRequired,
    movieDescriptions: PropTypes.object,
    updateGenre: PropTypes.func.isRequired,
    updateYear: PropTypes.func.isRequired,
    changeDashboard: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
};

class Dashboard extends Component {

    constructor(props) {
        super();
        this.state = {
            view: "Grid"
        };
    }

    handleGenre = (evt) => {
        this.props.updateGenre(evt.value);
    };

    handleYear = (evt) => {
        this.props.updateYear(evt.value);
    };

    onChange = (value) => {
        this.setState({view: value});
    };

    componentWillMount = () => {
        this.props.changeDashboard(false);
    };

    render() {
        const {view} = this.state;
        const {genre, year, movies, showDetailPage, movieDescriptions, changeDashboard, setDescription} = this.props;

        return (
            <div>
                <If condition={!showDetailPage}>
                    <div className="m-dropdown">
                        <div className="radio-buttons">
                            <RadioGroup onChange={this.onChange} horizontal>
                                <RadioButton value="Grid">
                                    Grid
                                </RadioButton>
                                <RadioButton value="List">
                                    List
                                </RadioButton>
                            </RadioGroup>
                        </div>
                        <b>Genre:</b>
                        <Select
                            className="dropdown"
                            name="genre-form-field"
                            value={genre}
                            onChange={this.handleGenre}
                            options={dropdownGenre}
                        />
                        <b>Year:</b>
                        <Select
                            className="dropdown"
                            name="year-form-field"
                            value={year}
                            onChange={this.handleYear}
                            options={dropdownYear}
                        />
                    </div>
                    <div className="m-rental-container">
                        <If condition={view === "Grid"}>
                            {movies.map((movie) => {
                                if (genre === "All" && year === "All") {
                                    return <MovieGrid key={movie.id}
                                                      details={movie}
                                                      showDetail={changeDashboard}
                                                      des={setDescription}/>
                                }
                                else if (genre !== "All" && year === "All") {
                                    if (movie.genre.split("|")[0] === genre)
                                        return <MovieGrid key={movie.id}
                                                          details={movie}
                                                          showDetail={changeDashboard}
                                                          des={setDescription}/>
                                }
                                else if (genre === "All" && year !== "All") {
                                    if (movie.year === year)
                                        return <MovieGrid key={movie.id}
                                                          details={movie}
                                                          showDetail={changeDashboard}
                                                          des={setDescription}/>
                                }
                                else {
                                    if (movie.genre.split("|")[0] === genre && movie.year === year)
                                        return <MovieGrid key={movie.id}
                                                          details={movie}
                                                          showDetail={changeDashboard}
                                                          des={setDescription}/>
                                }
                            })}
                        </If>
                        <If condition={view === "List"}>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Year</th>
                                </tr>
                                {movies.map((movie) => {
                                    if (genre === "All" && year === "All") {
                                        return <Row key={movie.id} details={movie}/>
                                    }
                                    else if (genre !== "All" && year === "All") {
                                        if (movie.genre.split("|")[0] === genre)
                                            return <Row key={movie.id} details={movie}/>
                                    }
                                    else if (genre === "All" && year !== "All") {
                                        if (movie.year === year)
                                            return <Row key={movie.id} details={movie}/>
                                    }
                                    else {
                                        if (movie.genre.split("|")[0] === genre && movie.year === year)
                                            return <Row key={movie.id} details={movie}/>
                                    }
                                })}
                                </tbody>
                            </table>
                        </If>
                    </div>
                </If>
                <If condition={showDetailPage}>
                    <div className="m-rental-container">
                        <MovieDetails movie={movieDescriptions}/>
                        <Link to="/dummy">
                            <button>
                                to dummy page
                            </button>
                        </Link>
                    </div>
                </If>
            </div>
        )
    };
}

Dashboard.propTypes = propTypes;

export default Dashboard;