import React, {Component} from "react";
import Select from 'react-select';
import MovieGrid from "../movie/MovieGrid";
import "../../styles/app.scss";
import 'react-select/dist/react-select.css';
import {RadioButton, RadioGroup} from "react-radio-buttons";
import ListRow from "../movie/TableRow";

export class Dashboard extends Component{

    constructor(props) {
        super();
        this.state = {
            movies: props.movies,
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
        this.setState({ view: value });
    };

    render() {
        let dropdownGenre = [{value:"All",label:"All"},{value: "Comedy", label:"Comedy"},{value:"Documentary",label:"Documentary"},
            {value:"Drama",label:"Drama"},{value:"Crime",label:"Crime"},{value:"Adventure",label:"Adventure"},
            {value:"Action",label:"Action"}, {value:"Children",label:"Children"},{value:"Horror",label:"Horror"}];
        let dropdownYear = [{value:"All",label:"All"},{value:"1974",label:"1974"},{value:"1992",label:"1992"},
            {value:"1994",label:"1994"}, {value:"1995",label:"1995"},{value:"1996",label:"1996"}];
        const { view } = this.state;
        const { genre, year } = this.props;

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
                    <If condition={view === "Grid"}>
                        {this.state.movies.map((movie) => {
                            if(genre === "All" && year === "All"){
                                return <MovieGrid key={movie.id} details={movie}/>
                            }
                            else if(genre !== "All" && year === "All"){
                                if(movie.genre.split("|")[0] === genre)
                                    return <MovieGrid key={movie.id} details={movie}/>
                            }
                            else if(genre === "All" && year !== "All"){
                                if(movie.year === year)
                                    return <MovieGrid key={movie.id} details={movie}/>
                            }
                            else {
                                if(movie.genre.split("|")[0] === genre && movie.year === year)
                                    return <MovieGrid key={movie.id} details={movie}/>
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
                                {this.state.movies.map((movie) => {
                                    if(genre === "All" && year === "All"){
                                        return <ListRow key={movie.id} details={movie}/>
                                    }
                                    else if(genre !== "All" && year === "All"){
                                        if(movie.genre.split("|")[0] === genre)
                                            return <ListRow key={movie.id} details={movie}/>
                                    }
                                    else if(genre === "All" && year !== "All"){
                                        if(movie.year === year)
                                            return <ListRow key={movie.id} details={movie}/>
                                    }
                                    else {
                                        if(movie.genre.split("|")[0] === genre && movie.year === year)
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