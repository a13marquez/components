import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardList } from './StyledStandardList';
import { StyledProductList } from './StyledProductList';
import { StyledSummaryItemsList } from './StyledSummaryItems';


test('It renders Styled Standard List', () => {
  const StandardList = mount(<StyledStandardList />);
  expect(StandardList).toMatchSnapshot();
});

test('It renders Styled Products List', () => {
  const ProductList = mount(<StyledProductList />);
  expect(ProductList).toMatchSnapshot();
});

test('It renders Styled Products List', () => {
  const SummaryItemsList = mount(<StyledSummaryItemsList />);
  expect(SummaryItemsList).toMatchSnapshot();
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
  const ProductList = mount(<StyledProductList />);
  expect(ProductList).toHaveStyleRule('margin', '0');
  expect(ProductList).toHaveStyleRule('padding', '0');
  expect(ProductList).toHaveStyleRule('border', '0');
  expect(ProductList).toHaveStyleRule('vertical-align', 'baseline');
  expect(ProductList).toHaveStyleRule('font', '100%');
  expect(ProductList).toHaveStyleRule('list-style', 'none');
  expect(ProductList).toHaveStyleRule('position', 'relative');
  expect(ProductList).toHaveStyleRule('width', '100%');
  expect(ProductList).toHaveStyleRule('padding-left', '0');
});

test('Styled Summary Items List have the correct styles', () => {
  const SummaryItemsList = mount(<StyledSummaryItemsList />);
  expect(SummaryItemsList).toHaveStyleRule('margin', '0');
  expect(SummaryItemsList).toHaveStyleRule('border', '0');
  expect(SummaryItemsList).toHaveStyleRule('vertical-align', 'baseline');
  expect(SummaryItemsList).toHaveStyleRule('font', '100%');
  expect(SummaryItemsList).toHaveStyleRule('list-style', 'none');
  expect(SummaryItemsList).toHaveStyleRule('padding', '32px 0');
  expect(SummaryItemsList).toHaveStyleRule('border-bottom', '1px solid rgba(33,34,64,0.16)');
});

test('Styled Product List have the correct styles', () => {
  const ProductList = mount(<StyledProductList />);
  expect(ProductList).toHaveStyleRule('margin', '0');
  expect(ProductList).toHaveStyleRule('padding', '0');
  expect(ProductList).toHaveStyleRule('border', '0');
  expect(ProductList).toHaveStyleRule('vertical-align', 'baseline');
  expect(ProductList).toHaveStyleRule('font', '100%');
  expect(ProductList).toHaveStyleRule('list-style', 'none');
  expect(ProductList).toHaveStyleRule('position', 'relative');
  expect(ProductList).toHaveStyleRule('width', '100%');
});

test('Styled Product List with props have the correct styles', () => {
  const ProductList = mount(<StyledProductList tableHead="true" />);
  expect(ProductList).toHaveStyleRule('margin', '0');
  expect(ProductList).toHaveStyleRule('border', '0');
  expect(ProductList).toHaveStyleRule('vertical-align', 'baseline');
  expect(ProductList).toHaveStyleRule('font', '100%');
  expect(ProductList).toHaveStyleRule('list-style', 'none');
  expect(ProductList).toHaveStyleRule('position', 'relative');
  expect(ProductList).toHaveStyleRule('width', '100%');
  expect(ProductList).toHaveStyleRule('padding-left', '0');
});
