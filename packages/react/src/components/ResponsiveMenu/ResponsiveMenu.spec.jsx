import React from 'react';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import { ResponsiveMenu } from './ResponsiveMenu';
import { BurguerButton }  from '../BurguerButton';

describe('Responsive Menu tests', () => {
  test('Renders Responsive Menu' , () => {
    const wrapper = mount(<ResponsiveMenu />);
    expect(wrapper.find('.bar1').length).toBeGreaterThanOrEqual(1);
    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
  });
});