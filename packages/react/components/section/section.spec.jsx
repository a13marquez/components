import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Section } from './Section';

describe('Section Component: ', () => {
  let section;
  beforeEach(() => {
    section = mount(<Section>
      <div />
    </Section>);
  });
  afterEach(() => {
    section = null;
  });
  test('It renders Section component', () => {
    expect(section).toMatchSnapshot();
  });

  test('It renders Section with props', () => {
    expect(section.props().children.type).toBe('div');
  });
});
