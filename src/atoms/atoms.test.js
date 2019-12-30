import React from 'react';
import { shallow } from 'enzyme';

//atom components
import Button from './Button';

function setup() {
    const wrapper = shallow(<Button />);
    return wrapper;
}
  
describe('Button', () => {
    it('Button should render', () => {
        const wrapper = setup();
        expect(wrapper.exists()).toBe(true);
    });
});