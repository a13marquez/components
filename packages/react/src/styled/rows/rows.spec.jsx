import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardRow } from './StyledStandardRow';
import { StyledProductListTitleRow } from './StyledProductListTitleRow';
import { StyledSummaryRow } from './StyledSummaryRow';


test('It renders Styled Standard Row', () => {
  const StandardRow = mount(<StyledStandardRow />);
  expect(StandardRow).toMatchSnapshot();
});

test('It renders Styled Product Title Row', () => {
  const ProductListTitleRow = mount(<StyledProductListTitleRow />);
  expect(ProductListTitleRow).toMatchSnapshot();
});

test('It renders Styled Summary Row', () => {
  const SummaryRow = mount(<StyledSummaryRow />);
  expect(SummaryRow).toMatchSnapshot();
});


test('Styled Standard Row have the correct styles', () => {
  const StandardRow = mount(<StyledStandardRow />);
  expect(StandardRow).toHaveStyleRule('position', 'relative');
  expect(StandardRow).toHaveStyleRule('display', 'flex');
  expect(StandardRow).toHaveStyleRule('flex-flow', 'row nowrap');
  expect(StandardRow).toHaveStyleRule('justify-content', 'space-between');
});

test('Styled Product Title Row have the correct styles', () => {
  const ProductListTitleRow = mount(<StyledProductListTitleRow />);
  expect(ProductListTitleRow).toHaveStyleRule('position', 'relative');
  expect(ProductListTitleRow).toHaveStyleRule('display', 'flex');
  expect(ProductListTitleRow).toHaveStyleRule('flex-flow', 'row nowrap');
  expect(ProductListTitleRow).toHaveStyleRule('justify-content', 'space-between');
  expect(ProductListTitleRow).toHaveStyleRule('width', '100%');
  expect(ProductListTitleRow).toHaveStyleRule('color', '#a6a7b3');
  expect(ProductListTitleRow).toHaveStyleRule('text-transform', 'uppercase');
  expect(ProductListTitleRow).toHaveStyleRule('letter-spacing', '1px');
  expect(ProductListTitleRow).toHaveStyleRule('font-size', '10px');
  expect(ProductListTitleRow).toHaveStyleRule('line-height', '16px');
});

test('Styled Summary Row have the correct styles', () => {
  const SummaryRow = mount(<StyledSummaryRow />);
  expect(SummaryRow).toHaveStyleRule('margin', '0');
  expect(SummaryRow).toHaveStyleRule('padding', '0');
  expect(SummaryRow).toHaveStyleRule('border', '0');
  expect(SummaryRow).toHaveStyleRule('vertical-align', 'baseline');
  expect(SummaryRow).toHaveStyleRule('font', '100%');
  expect(SummaryRow).toHaveStyleRule('font-size', '14px');
  expect(SummaryRow).toHaveStyleRule('line-height', '17px');
  expect(SummaryRow).toHaveStyleRule('display', 'flex');
  expect(SummaryRow).toHaveStyleRule('justify-content', 'space-between');
});
