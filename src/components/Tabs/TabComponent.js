import React, {Component} from "react";
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import '../../styles/tab.scss';
import Comments from "../Comments";
import Dashboard from "../dashboard/DashboardContainer";
import Visuals from "../Visuals";

export class TabComponent extends Component {

    componentWillMount() {
        this.props.actions.fetchAllMovies();
        this.props.actions.fetchMoviesInTrends();
    }

    render() {
        const {movies, trending} = this.props;
        let allMoviesCount = (movies)!= null ? movies.length : 0;
        let trendingMoviesCount = (trending)!= null ? trending.length : 0;

        return(
            <div>
                <If condition={movies !== null}>
                    <Tabs>
                        <TabList className="tablist">
                            <Tab className="tabpane"> All({allMoviesCount})</Tab>
                            <Tab className="tabpane"> Trending({trendingMoviesCount})</Tab>
                            <Tab className="tabpane"> Comments</Tab>
                            <Tab className="tabpane"> Visuals</Tab>
                        </TabList>
                        <TabPanel><Dashboard movies={movies}/></TabPanel>
                        <TabPanel><Dashboard movies={trending}/></TabPanel>
                        <TabPanel><Comments/></TabPanel>
                        <TabPanel><Visuals movies={movies}/></TabPanel>
                    </Tabs>
                </If>
            </div>
        )
    }
}

