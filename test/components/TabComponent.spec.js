import React from 'react';
import {shallow, mount} from 'enzyme';
import {TabComponent} from "../../src/components/Tabs/TabComponent";

describe('<TabComponent/>', () => {
    const props = {
        movies: [{title: "abc", year: "1995", trending:true},{title: "abcd", year: "1994", trending:false}],
        trending: [{title: "abc", year: "1995", trending:true}],
        actions: {
            fetchAllMovies: jest.fn(),
            fetchMoviesInTrends: jest.fn()
        }
    };

    it('should present the tablist', () => {
        const wrapper = shallow(<TabComponent {...props}/>);
        expect(wrapper.find('TabList.tablist').exists()).toBeTruthy();
        expect(wrapper.find('TabList.tablist').length).toEqual(1);
    });

    it('should present the tabpanes', () => {
        const wrapper = shallow(<TabComponent {...props}/>);
        expect(wrapper.find('Tab.tabpane').exists()).toBeTruthy();
        expect(wrapper.find('Tab.tabpane').length).toEqual(4);
    });

    it('should present the text on the tabpane', () => {
        const wrapper = shallow(<TabComponent {...props}/>);
        let all = wrapper.find('Tab.tabpane').at(0).childAt(0).text();
        let comment = wrapper.find('Tab.tabpane').at(2).childAt(0).text();

        expect(all).toEqual(' All(');
        expect(comment).toEqual(' Comments');
    });
});