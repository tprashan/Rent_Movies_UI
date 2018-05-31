import React from 'react';
import {shallow} from 'enzyme';
import MovieGrid from "../../src/components/movie/MovieGrid";

describe('<MovieGrid/>', () => {
    const props = {
        details: {title: "abc", year: "1995", genre: "Action",trending:true},
        showDetail: jest.fn(),
        des: jest.fn(),
    };

    it('should present the moviebox', () => {
        const wrapper = shallow(<MovieGrid {...props}/>);
        expect(wrapper.find('div.moviebox').exists()).toBeTruthy();
        expect(wrapper.find("div.moviebox").length).toEqual(1);
    });

    it('should present the title and genre in the movie box', () => {
        const wrapper = shallow(<MovieGrid {...props}/>);
        expect(wrapper.find('span.movie-title').exists()).toBeTruthy();
        expect(wrapper.find('span.movie-title').length).toEqual(1);
        expect(wrapper.find('span.corner-ribbon').exists()).toBeTruthy();
        expect(wrapper.find("span.corner-ribbon").length).toEqual(1);
    });
});