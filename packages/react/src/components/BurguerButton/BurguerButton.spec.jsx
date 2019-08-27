import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components'

import { BurguerButton } from './BurguerButton';


describe('Header tests', () => {
  test('Renders <BurguerButton/>' , () => {
    const wrapper = mount(<BurguerButton></BurguerButton>);
    expect(wrapper.find('.bar1')).toBeDefined();
    expect(wrapper.find('.bar2')).toBeDefined();
    expect(wrapper.find('.bar3')).toBeDefined();
  });

  test('Changes  <BurguerButton/> width and height' , () => {
    const wrapper = mount(
      <BurguerButton 
        height='500px'
        width='500px'
      />);
    
    expect(wrapper).toHaveStyleRule('height', '500px');
    expect(wrapper).toHaveStyleRule('width', '500px');
    
  });

  test('Change bar styles color when passed props' , () => {
    const wrapper = mount(
      <BurguerButton 
      barColor='white'
      barWidth='200px'
      barHeight='200px'
      barTransition='2s'
      />);
      expect(wrapper.find('.bar1'))
        .toHaveStyleRule('background-color', 'white');
      expect(wrapper.find('.bar1'))
        .toHaveStyleRule('width', '200px');
      expect(wrapper.find('.bar1'))
        .toHaveStyleRule('height', '200px');
      expect(wrapper.find('.bar1'))
        .toHaveStyleRule('transition', '2s');

      expect(wrapper.find('.bar2'))
        .toHaveStyleRule('background-color', 'white');
      expect(wrapper.find('.bar2'))
        .toHaveStyleRule('width', '200px');
      expect(wrapper.find('.bar2'))
        .toHaveStyleRule('height', '200px');
      expect(wrapper.find('.bar2'))
        .toHaveStyleRule('transition', '2s');
        
      expect(wrapper.find('.bar3'))
        .toHaveStyleRule('background-color', 'white');
      expect(wrapper.find('.bar3'))
        .toHaveStyleRule('width', '200px');
      expect(wrapper.find('.bar3'))
        .toHaveStyleRule('height', '200px');
      expect(wrapper.find('.bar3'))
        .toHaveStyleRule('transition', '2s');

  });

});