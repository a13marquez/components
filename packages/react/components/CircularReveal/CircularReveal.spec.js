
import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components'

import { CircularReveal } from './CircularReveal';


describe('Circular Reveal tests', () => {
  it('Renders <CircularReveal />' , () => {
    const wrapper = mount(<CircularReveal></CircularReveal>);
    expect(wrapper.find('img')).toHaveLength(1);
  });

});