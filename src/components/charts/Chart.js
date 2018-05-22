import React, {Component} from "react";
import PieChart from 'react-simple-pie-chart';
import genreColor from "./genreColor";
import ColorDetailsBoxes from "./ColorDetailsBoxes";

export default class Chart extends Component {

    state = {
        genres: this.props.genres,
        slice: null
    };

    componentWillMount() {
        let slices = this.state.genres.map((genre) => {
            genre.color = genreColor[genre.genre];
            return genre;
        });
        this.setState({slice: slices})
    }

    render() {

        return (
            <div className="pie-diagram">
                <ColorDetailsBoxes/>
                <div className="pie-chart">
                    <If condition={this.state.slice !== null}>
                        <PieChart
                            slices={this.state.slice}
                        />
                    </If>
                </div>
            </div>
        )
    }
}