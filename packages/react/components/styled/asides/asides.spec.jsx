import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardAside } from './StyledStandardAside';
import { StyledSummaryAside } from './StyledSummaryAside';


test('It renders Styled Standard Aside', () => {
  const StandardAside = mount(<StyledStandardAside />);
  expect(StandardAside).toMatchSnapshot();
});

test('It renders Styled Summary Aside', () => {
  const SummaryAside = mount(<StyledSummaryAside />);
  expect(SummaryAside).toMatchSnapshot();
});

test('Styled Standard Aside have the correct styles', () => {
  const StandardAside = mount(<StyledStandardAside />);
  expect(StandardAside).toHaveStyleRule('margin', '0');
  expect(StandardAside).toHaveStyleRule('padding', '0');
  expect(StandardAside).toHaveStyleRule('border', '0');
  expect(StandardAside).toHaveStyleRule('vertical-align', 'baseline');
  expect(StandardAside).toHaveStyleRule('font', '100%');
  expect(StandardAside).toHaveStyleRule('display', 'block');
});


test('Styled Summary Aside have the correct styles', () => {
  const SummaryAside = mount(<StyledSummaryAside />);
  expect(SummaryAside).toHaveStyleRule('margin', '0');
  expect(SummaryAside).toHaveStyleRule('border', '0');
  expect(SummaryAside).toHaveStyleRule('vertical-align', 'baseline');
  expect(SummaryAside).toHaveStyleRule('font', '100%');
  expect(SummaryAside).toHaveStyleRule('display', 'flex');
  expect(SummaryAside).toHaveStyleRule('flex-flow', 'column wrap');
  expect(SummaryAside).toHaveStyleRule('padding', '40px 32px');
  expect(SummaryAside).toHaveStyleRule('width', '312px');
  expect(SummaryAside).toHaveStyleRule('background-color', '#f3f3f3');
  expect(SummaryAside).toHaveStyleRule('color', '#212240');
});
