import React, {Component} from "react";
import PieChart from 'react-simple-pie-chart';
import genreColor from "./genreColor";
import ColorDetailsBoxes from "./ColorDetailsBoxes";
import PropTypes from 'prop-types';

const propTypes = {
    genres: PropTypes.array.isRequired,
};

class Pie extends Component {
    constructor(props) {
        super();
        this.state = {
            genres: props.genres,
            slice: null
        };
    }

    componentWillMount() {
        let slices = this.state.genres.map((genre) => {
            genre.color = genreColor[genre.genre];
            return genre;
        });
        this.setState({slice: slices})
    }

    render() {
        const {slice} = this.state;

        return (
            <div className="pie-diagram">
                <ColorDetailsBoxes/>
                <div className="pie-chart">
                    <If condition={slice !== null}>
                        <PieChart
                            slices={slice}
                        />
                    </If>
                </div>
            </div>
        )
    }
}

Pie.propTypes = propTypes;

export default Pie;