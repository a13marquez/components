
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import React from 'react';
import { mount } from 'enzyme';

import { Header } from './Header';
import { StyledHeader } from './StyledHeader';

configure({ adapter: new Adapter() });


describe('Header tests', () => {
  it('Renders <StyledHeader />' , () => {
    const wrapper = mount(<Header></Header>);
    expect(wrapper.find('header')).toHaveLength(1);
  });
});