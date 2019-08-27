import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components'

import { Header } from './Header';


describe('Header tests', () => {
  test('Renders <header />' , () => {
    const wrapper = mount(<Header></Header>);
    expect(wrapper.find('header')).toHaveLength(1);
  });

  test('Renders children' , () => {
    const wrapper = mount(<Header>
      <nav></nav>
    </Header>);
    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('nav')).toHaveLength(1);
  });

  test('Should have the default style rules', () => {
    const wrapper = mount(<Header></Header>);
    expect(wrapper).toHaveStyleRule( 'background-color', 'rgba(0,0,0,.7)');
    expect(wrapper).toHaveStyleRule( 'position', 'fixed');
    expect(wrapper).toHaveStyleRule( 'z-index', '10');
    expect(wrapper).toHaveStyleRule( 'top', '0');
    expect(wrapper).toHaveStyleRule( 'left', '0');
    expect(wrapper).toHaveStyleRule( 'width', '100%');
    expect(wrapper).toHaveStyleRule( 'height', '80px');
    expect(wrapper).toHaveStyleRule( 'color', 'white');
    expect(wrapper).toHaveStyleRule( 'padding', '1em 3em');
    expect(wrapper).toHaveStyleRule( 'display', 'flex');
    expect(wrapper).toHaveStyleRule( 'justify-content', 'space-around');
    expect(wrapper).toHaveStyleRule( 'align-items', 'flex-end');
  })

  test('Change background color when passed props' , () => {
    const wrapper = mount(
      <Header 
      backgroundColor={'white'}
      />);
    expect(wrapper).toHaveStyleRule('background-color', 'white');
  });
  
  test('Change height when passed props' , () => {
    const wrapper = mount(
      <Header 
      height={'50px'}
      />);
    expect(wrapper).toHaveStyleRule('height', '50px');
  });

  test('Change text color when passed props' , () => {
    const wrapper = mount(
      <Header 
      color={'red'}
      />);
    expect(wrapper).toHaveStyleRule('color', 'red');
  });

  test('Change padding when passed props' , () => {
    const wrapper = mount(
      <Header 
      padding={'0'}
      />);
    expect(wrapper).toHaveStyleRule('padding', '0');
  });

  test('Change align-items when passed props' , () => {
    const wrapper = mount(
      <Header 
      alignItems={'right'}
      />);
    expect(wrapper).toHaveStyleRule('align-items', 'right');
  });
});