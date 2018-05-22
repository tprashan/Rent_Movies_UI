import React, {Component} from "react";

export default class ColorDetailsBoxes extends Component {
    render() {
        return(
            <div className="color-details">
                <div className="box-lightgreen"/>
                <span>Action</span>
                <div className="box-yellow"/>
                <span> Adventure</span>
                <div className="box-magenta"/>
                <span> Crime</span>
                <div className="box-blue"/>
                <span> Comedy</span>
                <div className="box-maroon"/>
                <span> Children</span>
                <div className="box-green"/>
                <span> Drama</span>
                <div className="box-lightseagreen"/>
                <span> Documentary</span>
                <div className="box-red"/>
                <span>Horror</span>
                <div className="box-orange"/>
                <span>Thriller</span>
                <div className="box-brown"/>
                <span>Mystery</span>
            </div>
        )
    }
}