import React from 'react';
import { mount } from 'enzyme';

import { Header } from './Header';

describe('Header tests', () => {
  it('Renders <header />' , () => {
    const wrapper = mount(<Header></Header>);
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('Renders children' , () => {
    const wrapper = mount(<Header>
      <nav></nav>
    </Header>);
    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('nav')).toHaveLength(1);
  });


});