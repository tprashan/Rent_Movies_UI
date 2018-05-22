import React, {Component} from "react";
import Select from 'react-select';
import MovieGrid from "../movie/MovieGrid";
import "../../styles/app.scss";
import 'react-select/dist/react-select.css';
import {RadioButton, RadioGroup} from "react-radio-buttons";
import ListRow from "../movie/TableRow";

export default class Dashboard extends Component{
    state = {
        movies: this.props.movies,
        genre: "All",
        year: "All",
        view: "Grid"
    };

    handleGenre = (genre) => {
        this.setState({ genre: genre.label });
    };

    handleYear = (year) => {
        this.setState({ year: year.label });
    };

    onChange = (value) => {
        this.setState({ view: value });
    };

    render() {
        let dropdownGenre = [{value:"all",label:"All"},{value: "comedy", label:"Comedy"},{value:"documentary",label:"Documentary"},
            {value:"drama",label:"Drama"},{value:"crime",label:"Crime"},{value:"adventure",label:"Adventure"},
            {value:"action",label:"Action"}, {value:"children",label:"Children"},{value:"horror",label:"Horror"}];
        let dropdownYear = [{value:"all",label:"All"},{value:"1",label:"1974"},{value:"2",label:"1992"},{value:"3",label:"1994"},
            {value:"4",label:"1995"},{value:"5",label:"1996"}];
        const { genre, year } = this.state;

        return (
            <div>
                <div className="m-dropdown">
                    <div className="radio-buttons">
                        <RadioGroup onChange={ this.onChange } horizontal>
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
                    <If condition={this.state.view === "Grid"}>
                        {this.state.movies.map((movie) => {
                            if(this.state.genre === "All" && this.state.year === "All"){
                                return <MovieGrid key={movie.id} details={movie}/>
                            }
                            else if(this.state.genre !== "All" && this.state.year === "All"){
                                if(movie.genre.split("|")[0] === this.state.genre)
                                    return <MovieGrid key={movie.id} details={movie}/>
                            }
                            else if(this.state.genre === "All" && this.state.year !== "All"){
                                if(movie.year === this.state.year)
                                    return <MovieGrid key={movie.id} details={movie}/>
                            }
                            else {
                                if(movie.genre.split("|")[0] === this.state.genre && movie.year === this.state.year)
                                    return <MovieGrid key={movie.id} details={movie}/>
                            }
                        })}
                    </If>
                    <If condition={this.state.view === "List"}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Year</th>
                                </tr>
                                {this.state.movies.map((movie) => {
                                    if(this.state.genre === "All" && this.state.year === "All"){
                                        return <ListRow key={movie.id} details={movie}/>
                                    }
                                    else if(this.state.genre !== "All" && this.state.year === "All"){
                                        if(movie.genre.split("|")[0] === this.state.genre)
                                            return <ListRow key={movie.id} details={movie}/>
                                    }
                                    else if(this.state.genre === "All" && this.state.year !== "All"){
                                        if(movie.year === this.state.year)
                                            return <ListRow key={movie.id} details={movie}/>
                                    }
                                    else {
                                        if(movie.genre.split("|")[0] === this.state.genre && movie.year === this.state.year)
                                            return <ListRow key={movie.id} details={movie}/>
                                    }
                                })}
                            </tbody>
                        </table>
                    </If>
                </div>
            </div>
        )
    };
}