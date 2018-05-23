import React, {Component} from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import PropTypes from 'prop-types';

export default class Linear extends Component {
    static propTypes = {
        years: PropTypes.array.isRequired,
    };

    render() {
        const {years} = this.props;
        return(
            <div>
                <LineChart width={600} height={300} data={years}>
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        )
    }
}