import React, {Component} from "react";
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import PropTypes from "prop-types";

export default class Bar extends Component {
    static propTypes = {
        years: PropTypes.array.isRequired,
    };

    render() {
        const {years} = this.props;
        return(
            <div>
                <BarChart width={600} height={300} data={years}>
                    <XAxis dataKey="year" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip/>
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar type="monotone" dataKey="count" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        )
    }
}