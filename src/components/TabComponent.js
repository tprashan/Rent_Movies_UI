import React, {Component} from "react";
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import '../styles/tab.scss';
import Comments from "./Comments";
import Dashboard from "./dashboard/Dashboard";
import { fetchKviStatusCard } from '../fetchers';
import Visuals from "./Visuals";

export default class TabComponent extends Component {

    state = {
        movies : null,
        trending: null
    };

    componentWillMount() {
        fetchKviStatusCard().then(data => {
            this.setState({movies: data});
            let trending = data.filter((movie) => {
                return movie.trending;
            });
            this.setState({trending: trending});
        })
    }

    render() {
        let allMoviesCount = (this.state.movies)!= null ? this.state.movies.length : 0;
        let trendingMoviesCount = (this.state.trending)!= null ? this.state.trending.length : 0;

        return(
            <div>
                <If condition={this.state.movies !=null}>
                    <Tabs>
                        <TabList className="tablist">
                            <Tab className="tabpane"> All({allMoviesCount})</Tab>
                            <Tab className="tabpane"> Trending({trendingMoviesCount})</Tab>
                            <Tab className="tabpane"> Comments</Tab>
                            <Tab className="tabpane"> Visuals</Tab>
                        </TabList>
                        <TabPanel><Dashboard movies={this.state.movies}/></TabPanel>
                        <TabPanel><Dashboard movies={this.state.trending}/></TabPanel>
                        <TabPanel><Comments/></TabPanel>
                        <TabPanel><Visuals movies={this.state.movies}/></TabPanel>
                    </Tabs>
                </If>
            </div>
        )
    }
}

