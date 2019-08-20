import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardColumn } from './StyledStandardColumn';

test('It renders Styled Standard Column', () => {
  const StandardColumn = mount(<StyledStandardColumn />);
  expect(StandardColumn).toMatchSnapshot();
});

test('Styled Standard Column have the correct styles', () => {
  const StandardColumn = mount(<StyledStandardColumn />);
  expect(StandardColumn).toHaveStyleRule('display', 'flex');
  expect(StandardColumn).toHaveStyleRule('align-items', 'center');
  expect(StandardColumn).toHaveStyleRule('width', '20%');
});

test('Styled Standard Column have the correct styles when passed props', () => {
  const StandardColumn = mount(<StyledStandardColumn width="35%"/>);
  expect(StandardColumn).toHaveStyleRule('display', 'flex');
  expect(StandardColumn).toHaveStyleRule('align-items', 'center');
  expect(StandardColumn).toHaveStyleRule('width', '35%');
});

