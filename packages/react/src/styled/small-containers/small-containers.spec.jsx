import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardParagraph } from './StyledStandardParagraph';
import { StyledStandardSpan } from './StyledStandardSpan';
import { StyledCurrencySpan } from './StyledCurrencySpan';
import { StyledProductCodeParagraph } from './StyledProductCode';
import { StyledProductPriceSpan } from './StyledProductPrice';
import { StyledHalfBorderWrapper } from './StyledHalfBorderWrapper';
import { StyledSummaryPriceSpan } from './StyledSummaryPrice';
import { StyledSummaryTotalCost } from './StyledSummaryTotalCost';
import { StyledSummaryTotalPrice } from './StyledSummaryTotalPrice';
import { StyledSummaryTotalWrapper } from './StyledSummaryTotalWrapper';

test('It renders Styled Standard Paragraph', () => {
  const StandardParagraph = mount(<StyledStandardParagraph />);
  expect(StandardParagraph).toMatchSnapshot();
});

test('It renders Styled Standard Span', () => {
  const StandardSpan = mount(<StyledStandardSpan />);
  expect(StandardSpan).toMatchSnapshot();
});

test('It renders Styled Currency Span', () => {
  const CurrencySpan = mount(<StyledCurrencySpan />);
  expect(CurrencySpan).toMatchSnapshot();
});

test('It renders Styled Product Code Paragraph', () => {
  const ProductCodeParagraph = mount(<StyledProductCodeParagraph />);
  expect(ProductCodeParagraph).toMatchSnapshot();
});

test('It renders Styled Price Span', () => {
  const ProductPriceSpan = mount(<StyledProductPriceSpan />);
  expect(ProductPriceSpan).toMatchSnapshot();
});

test('It renders Styled Half border Wrapper', () => {
  const HalfBorderWrapper = mount(<StyledHalfBorderWrapper />);
  expect(HalfBorderWrapper).toMatchSnapshot();
});

test('It renders Styled Summary Price Span', () => {
  const SummaryPriceSpan = mount(<StyledSummaryPriceSpan />);
  expect(SummaryPriceSpan).toMatchSnapshot();
});

test('It renders Styled Summary Total Price Span', () => {
  const SummaryTotalWrapper = mount(<StyledSummaryTotalWrapper />);
  expect(SummaryTotalWrapper).toMatchSnapshot();
});

test('It renders Styled Summary Total Cost Span', () => {
  const SummaryTotalCost = mount(<StyledSummaryTotalCost />);
  expect(SummaryTotalCost).toMatchSnapshot();
});

test('It renders Styled Summary Total Price Span', () => {
  const SummaryTotalPrice = mount(<StyledSummaryTotalPrice />);
  expect(SummaryTotalPrice).toMatchSnapshot();
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

test('Styled Currency Span have the correct styles', () => {
  const CurrencySpan = mount(<StyledCurrencySpan />);
  expect(CurrencySpan).toHaveStyleRule('margin', '0');
  expect(CurrencySpan).toHaveStyleRule('padding', '0');
  expect(CurrencySpan).toHaveStyleRule('border', '0');
  expect(CurrencySpan).toHaveStyleRule('vertical-align', 'baseline');
  expect(CurrencySpan).toHaveStyleRule('font', '100%');
  expect(CurrencySpan).toHaveStyleRule('margin-left', '4px');
});

test('Styled Product Code Paragraph have the correct styles', () => {
  const ProductCodeParagraph = mount(<StyledProductCodeParagraph />);
  expect(ProductCodeParagraph).toHaveStyleRule('margin', '0');
  expect(ProductCodeParagraph).toHaveStyleRule('padding', '0');
  expect(ProductCodeParagraph).toHaveStyleRule('border', '0');
  expect(ProductCodeParagraph).toHaveStyleRule('vertical-align', 'baseline');
  expect(ProductCodeParagraph).toHaveStyleRule('font', '100%');
  expect(ProductCodeParagraph).toHaveStyleRule('font-size', '12px');
  expect(ProductCodeParagraph).toHaveStyleRule('line-height', '16px');
  expect(ProductCodeParagraph).toHaveStyleRule('border-radius', '4px');
  expect(ProductCodeParagraph).toHaveStyleRule('color', '#a6a7b3');
  expect(ProductCodeParagraph).toHaveStyleRule('letter-spacing', '0.13px');
  expect(ProductCodeParagraph).toHaveStyleRule('font-weight', '400');
});

test('Styled Price Span have the correct styles', () => {
  const ProductPriceSpan = mount(<StyledProductPriceSpan />);
  expect(ProductPriceSpan).toHaveStyleRule('margin', '0');
  expect(ProductPriceSpan).toHaveStyleRule('padding', '0');
  expect(ProductPriceSpan).toHaveStyleRule('border', '0');
  expect(ProductPriceSpan).toHaveStyleRule('vertical-align', 'baseline');
  expect(ProductPriceSpan).toHaveStyleRule('font', '100%');
  expect(ProductPriceSpan).toHaveStyleRule('color', '#000000');
  expect(ProductPriceSpan).toHaveStyleRule('font-size', '16px');
});

test('Styled Half Border Wrapper have the correct styles', () => {
  const HalfBorderWrapper = mount(<StyledHalfBorderWrapper />);
  expect(HalfBorderWrapper).toHaveStyleRule('margin', '0');
  expect(HalfBorderWrapper).toHaveStyleRule('padding', '24px 0');
  expect(HalfBorderWrapper).toHaveStyleRule('border', '0');
  expect(HalfBorderWrapper).toHaveStyleRule('vertical-align', 'baseline');
  expect(HalfBorderWrapper).toHaveStyleRule('font', '100%');
  expect(HalfBorderWrapper).toHaveStyleRule('border-bottom', '1px solid rgba(33,34,64,0.16)');
});

test('Styled Summary Price have the correct styles', () => {
  const SummaryPriceSpan = mount(<StyledSummaryPriceSpan />);
  expect(SummaryPriceSpan).toHaveStyleRule('margin', '0');
  expect(SummaryPriceSpan).toHaveStyleRule('padding', '0');
  expect(SummaryPriceSpan).toHaveStyleRule('border', '0');
  expect(SummaryPriceSpan).toHaveStyleRule('vertical-align', 'baseline');
  expect(SummaryPriceSpan).toHaveStyleRule('font', '100%');
  expect(SummaryPriceSpan).toHaveStyleRule('font-size', '16px');
  expect(SummaryPriceSpan).toHaveStyleRule('font-weight', 'bold');
});

test('Styled Summary Total Wrapper have the correct styles', () => {
  const SummaryTotalWrapper = mount(<StyledSummaryTotalWrapper />);
  expect(SummaryTotalWrapper).toHaveStyleRule('margin', '0');
  expect(SummaryTotalWrapper).toHaveStyleRule('padding', '0');
  expect(SummaryTotalWrapper).toHaveStyleRule('border', '0');
  expect(SummaryTotalWrapper).toHaveStyleRule('vertical-align', 'baseline');
  expect(SummaryTotalWrapper).toHaveStyleRule('font', '100%');

  expect(SummaryTotalWrapper).toHaveStyleRule('align-self', 'flex-end');
  expect(SummaryTotalWrapper).toHaveStyleRule('margin-top', 'auto');
  expect(SummaryTotalWrapper).toHaveStyleRule('padding-top', '16px');
  expect(SummaryTotalWrapper).toHaveStyleRule('padding-bottom', '0');
  expect(SummaryTotalWrapper).toHaveStyleRule('border-top', '1px solid rgba(33,34,64,0.16)');
  expect(SummaryTotalWrapper).toHaveStyleRule('color', '#212240');
});

test('Styled Summary Total Cost have the correct styles', () => {
  const SummaryTotalCost = mount(<StyledSummaryTotalCost />);
  expect(SummaryTotalCost).toHaveStyleRule('margin', '0');
  expect(SummaryTotalCost).toHaveStyleRule('padding', '0');
  expect(SummaryTotalCost).toHaveStyleRule('border', '0');
  expect(SummaryTotalCost).toHaveStyleRule('vertical-align', 'baseline');
  expect(SummaryTotalCost).toHaveStyleRule('font', '100%');
  expect(SummaryTotalCost).toHaveStyleRule('flex-basis', '100%');
  expect(SummaryTotalCost).toHaveStyleRule('text-transform', 'uppercase');
});

test('Styled Summary Total Price have the correct styles', () => {
  const SummaryTotalPrice = mount(<StyledSummaryTotalPrice />);
  expect(SummaryTotalPrice).toHaveStyleRule('margin', '0');
  expect(SummaryTotalPrice).toHaveStyleRule('padding', '0');
  expect(SummaryTotalPrice).toHaveStyleRule('border', '0');
  expect(SummaryTotalPrice).toHaveStyleRule('vertical-align', 'baseline');
  expect(SummaryTotalPrice).toHaveStyleRule('font', '100%');
  expect(SummaryTotalPrice).toHaveStyleRule('font-weight', 'bold');
});
