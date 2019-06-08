import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components'

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

  it('Change background color when passed props' , () => {
    const wrapper = mount(
      <Header 
      backgroundColor={'white'}
      />);
    expect(wrapper).toHaveStyleRule('background-color', 'white');
  });
  
  it('Change text color when passed props' , () => {
    const wrapper = mount(
      <Header 
      color={'red'}
      />);
    expect(wrapper).toHaveStyleRule('color', 'red');
  });


});