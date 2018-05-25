import React from 'react';
import {shallow} from 'enzyme';
import {Dashboard} from "../../src/components/dashboard/Dashboard";

describe('<Dashboard/>', () => {
    const props = {
        movies: [{title: "abc", year: "1995", trending:true, genre: "Action"},
            {title: "abcd", year: "1994", trending:false, genre: "Drama"}]
    };

    it('should present the movie dropdowns div', () => {
        const wrapper = shallow(<Dashboard {...props}/>);
        expect(wrapper.find('div.m-dropdown').exists()).toBeTruthy();
        expect(wrapper.find("div.m-dropdown").length).toEqual(1);
    });

    it('should present two select dropdowns', () => {
        const wrapper = shallow(<Dashboard {...props}/>);
        expect(wrapper.find('Select.dropdown').exists()).toBeTruthy();
        expect(wrapper.find("Select.dropdown").length).toEqual(2);
    });

    it('should present two radio button', () => {
        const wrapper = shallow(<Dashboard {...props}/>);
        expect(wrapper.find('.radio-buttons').exists()).toBeTruthy();

        const buttons = wrapper.find(".radio-buttons").at(0).children().children();
        expect(buttons.length).toEqual(2);
    });

});