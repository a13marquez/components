import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import StyledStandardParagraph from './StyledStandardParagraph';
import StyledStandardSpan from './StyledStandardSpan';

test('It renders Styled Standard Paragraph', () => {
  const StandardParagraph = mount(<StyledStandardParagraph />);
  expect(StandardParagraph).toMatchSnapshot();
});

test('It renders Styled Standard Span', () => {
  const StandardSpan = mount(<StyledStandardSpan />);
  expect(StandardSpan).toMatchSnapshot();
});


test('Styled Standard Paragraph have the correct styles', () => {
  const StandardParagraph = mount(<StyledStandardParagraph />);
  expect(StandardParagraph).toHaveStyleRule('margin', '0');
  expect(StandardParagraph).toHaveStyleRule('padding', '0');
  expect(StandardParagraph).toHaveStyleRule('border', '0');
  expect(StandardParagraph).toHaveStyleRule('vertical-align', 'baseline');
  expect(StandardParagraph).toHaveStyleRule('font', '100%');
});

test('Styled Standard Span have the correct styles', () => {
  const StandardSpan = mount(<StyledStandardSpan />);
  expect(StandardSpan).toHaveStyleRule('margin', '0');
  expect(StandardSpan).toHaveStyleRule('padding', '0');
  expect(StandardSpan).toHaveStyleRule('border', '0');
  expect(StandardSpan).toHaveStyleRule('vertical-align', 'baseline');
  expect(StandardSpan).toHaveStyleRule('font', '100%');
});