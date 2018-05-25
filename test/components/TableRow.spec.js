import React from 'react';
import {shallow} from 'enzyme';
import TableRow from "../../src/components/movie/TableRow";

describe('<TableRow/>', () => {
    const props = {
        details: {title: "abc", year: "1995", genre: "Action",trending:true}
    };

    it('should present at least one row', () => {
        const wrapper = shallow(<TableRow {...props}/>);
        expect(wrapper.find('#row').exists()).toBeTruthy();
        expect(wrapper.find("#row").length).toEqual(1);
    });

    it('should present the one row with three column', () => {
        const wrapper = shallow(<TableRow {...props}/>);
        expect(wrapper.find('#row').at(0).children().length).toEqual(3);
    });
});