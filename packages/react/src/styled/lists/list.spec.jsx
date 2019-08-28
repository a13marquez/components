import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardList } from './StyledStandardList';
import { StyledList } from './StyledList';
import { StyledPaddedList } from './StyledPaddedList';


test('It renders Styled Standard List', () => {
  const StandardList = mount(<StyledStandardList />);
  expect(StandardList).toMatchSnapshot();
});

test('It renders Styled Products List', () => {
  const List = mount(<StyledList />);
  expect(List).toMatchSnapshot();
});

test('It renders Styled Products List', () => {
  const PaddedList = mount(<StyledPaddedList />);
  expect(PaddedList).toMatchSnapshot();
});

test('Styled Standard List have the correct styles', () => {
  const StandardList = mount(<StyledStandardList />);
  expect(StandardList).toHaveStyleRule('margin', '0');
  expect(StandardList).toHaveStyleRule('padding', '0');
  expect(StandardList).toHaveStyleRule('border', '0');
  expect(StandardList).toHaveStyleRule('vertical-align', 'baseline');
  expect(StandardList).toHaveStyleRule('font', '100%');
  expect(StandardList).toHaveStyleRule('list-style', 'none');
});

test('Styled Product List have the correct styles', () => {
  const List = mount(<StyledList />);
  expect(List).toHaveStyleRule('margin', '0');
  expect(List).toHaveStyleRule('padding', '0');
  expect(List).toHaveStyleRule('border', '0');
  expect(List).toHaveStyleRule('vertical-align', 'baseline');
  expect(List).toHaveStyleRule('font', '100%');
  expect(List).toHaveStyleRule('list-style', 'none');
  expect(List).toHaveStyleRule('position', 'relative');
  expect(List).toHaveStyleRule('width', '100%');
  expect(List).toHaveStyleRule('padding-left', '0');
});

test('Styled Summary Items List have the correct styles', () => {
  const PaddedList = mount(<StyledPaddedList />);
  expect(PaddedList).toHaveStyleRule('margin', '0');
  expect(PaddedList).toHaveStyleRule('border', '0');
  expect(PaddedList).toHaveStyleRule('vertical-align', 'baseline');
  expect(PaddedList).toHaveStyleRule('font', '100%');
  expect(PaddedList).toHaveStyleRule('list-style', 'none');
  expect(PaddedList).toHaveStyleRule('padding', '32px 0');
  expect(PaddedList).toHaveStyleRule('border-bottom', '1px solid rgba(33,34,64,0.16)');
});

test('Styled Product List have the correct styles', () => {
  const List = mount(<StyledList />);
  expect(List).toHaveStyleRule('margin', '0');
  expect(List).toHaveStyleRule('padding', '0');
  expect(List).toHaveStyleRule('border', '0');
  expect(List).toHaveStyleRule('vertical-align', 'baseline');
  expect(List).toHaveStyleRule('font', '100%');
  expect(List).toHaveStyleRule('list-style', 'none');
  expect(List).toHaveStyleRule('position', 'relative');
  expect(List).toHaveStyleRule('width', '100%');
});

test('Styled Product List with props have the correct styles', () => {
  const List = mount(<StyledList tableHead="true" />);
  expect(List).toHaveStyleRule('margin', '0');
  expect(List).toHaveStyleRule('border', '0');
  expect(List).toHaveStyleRule('vertical-align', 'baseline');
  expect(List).toHaveStyleRule('font', '100%');
  expect(List).toHaveStyleRule('list-style', 'none');
  expect(List).toHaveStyleRule('position', 'relative');
  expect(List).toHaveStyleRule('width', '100%');
  expect(List).toHaveStyleRule('padding-left', '0');
});
