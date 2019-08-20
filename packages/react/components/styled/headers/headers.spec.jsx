import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardBigHeader, StyledStandardMediumHeader } from './StyledStandardHeaders';
import { StyledProductHeader } from './StyledProductHeader';
import { StyledMainHeader } from './StyledMainHeader';

test('It renders Styled Standard Big Header', () => {
  const StandardBigHeader = mount(<StyledStandardBigHeader />);
  expect(StandardBigHeader).toMatchSnapshot();
});

test('It renders Styled Standard Medium Header', () => {
  const StandardMediumHeader = mount(<StyledStandardMediumHeader />);
  expect(StandardMediumHeader).toMatchSnapshot();
});

test('It renders Styled Product Header', () => {
  const ProductHeader = mount(<StyledProductHeader />);
  expect(ProductHeader).toMatchSnapshot();
});

test('It renders Styled Main Header', () => {
  const MainHeader = mount(<StyledMainHeader />);
  expect(MainHeader).toMatchSnapshot();
});

test('Styled Standard Big Header have the correct styles', () => {
  const StandardBigHeader = mount(<StyledStandardBigHeader />);
  expect(StandardBigHeader).toHaveStyleRule('margin', '0');
  expect(StandardBigHeader).toHaveStyleRule('padding', '0');
  expect(StandardBigHeader).toHaveStyleRule('border', '0');
  expect(StandardBigHeader).toHaveStyleRule('vertical-align', 'baseline');
  expect(StandardBigHeader).toHaveStyleRule('font', '100%');
  expect(StandardBigHeader).toHaveStyleRule('position', 'relative');
  expect(StandardBigHeader).toHaveStyleRule('letter-spacing', '-0.18px');
  expect(StandardBigHeader).toHaveStyleRule('font-size', '18px');
  expect(StandardBigHeader).toHaveStyleRule('line-height', '24px');
});


test('Styled Standard Medium Header have the correct styles', () => {
  const StandardMediumHeader = mount(<StyledStandardMediumHeader />);
  expect(StandardMediumHeader).toHaveStyleRule('margin', '0');
  expect(StandardMediumHeader).toHaveStyleRule('padding', '0');
  expect(StandardMediumHeader).toHaveStyleRule('border', '0');
  expect(StandardMediumHeader).toHaveStyleRule('vertical-align', 'baseline');
  expect(StandardMediumHeader).toHaveStyleRule('font', '100%');
  expect(StandardMediumHeader).toHaveStyleRule('color', '#717285');
  expect(StandardMediumHeader).toHaveStyleRule('letter-spacing', '0');
  expect(StandardMediumHeader).toHaveStyleRule('font-weight', '300');
  expect(StandardMediumHeader).toHaveStyleRule('text-transform', 'uppercase');
  expect(StandardMediumHeader).toHaveStyleRule('font-size', '12px');
  expect(StandardMediumHeader).toHaveStyleRule('line-height', '16px');
});

test('Styled Product Header have the correct styles', () => {
  const ProductHeader = mount(<StyledProductHeader />);
  expect(ProductHeader).toHaveStyleRule('margin', '0');
  expect(ProductHeader).toHaveStyleRule('padding', '0');
  expect(ProductHeader).toHaveStyleRule('border', '0');
  expect(ProductHeader).toHaveStyleRule('vertical-align', 'baseline');
  expect(ProductHeader).toHaveStyleRule('font', '100%');
  expect(ProductHeader).toHaveStyleRule('color', '#7350ff');
  expect(ProductHeader).toHaveStyleRule('font-size', '16px');
  expect(ProductHeader).toHaveStyleRule('line-height', '24px');
});

test('Styled Main Header have the correct styles', () => {
  const MainHeader = mount(<StyledMainHeader />);
  expect(MainHeader).toHaveStyleRule('margin', '0');
  expect(MainHeader).toHaveStyleRule('padding', '0');
  expect(MainHeader).toHaveStyleRule('border', '0');
  expect(MainHeader).toHaveStyleRule('vertical-align', 'baseline');
  expect(MainHeader).toHaveStyleRule('font', '100%');
  expect(MainHeader).toHaveStyleRule('padding-bottom', '16px');
  expect(MainHeader).toHaveStyleRule('border-bottom', '1px solid rgba(33,34,64,0.16)');
});
