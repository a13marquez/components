import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components'

import { RoundImage } from './RoundImage';


describe('RoundImage tests', () => {
  it('Renders <RoundImage />' , () => {
    const wrapper = mount(<RoundImage></RoundImage>);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('Change background color when passed props' , () => {
    const wrapper = mount(
      <RoundImage 
      backgroundColor={'white'}
      />);
    expect(wrapper).toHaveStyleRule('background-color', 'white');
  });
  
  it('Change height when passed props' , () => {
    const wrapper = mount(
      <RoundImage 
      height={'100px'}
      />);
    expect(wrapper).toHaveStyleRule('height', '100px');
  });


});