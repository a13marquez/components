import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardImageWrapper } from './StyledStandardImageWrapper';
import { StyledProductImageWrapper } from './StyledProductImageWrapper';
import { StyledImage } from './StyledImg';

test('It renders Styled Standard Image Wrapper', () => {
  const StandardImageWrapper = mount(<StyledStandardImageWrapper />);
  expect(StandardImageWrapper).toMatchSnapshot();
});

test('It renders Styled Product Image Wrapper', () => {
  const ProductImageWrapper = mount(<StyledProductImageWrapper />);
  expect(ProductImageWrapper).toMatchSnapshot();
});

test('It renders Styled  Image', () => {
  const Image = mount(<StyledImage />);
  expect(Image).toMatchSnapshot();
});


test('Styled Standard Image have the correct styles', () => {
  const StandardImageWrapper = mount(<StyledStandardImageWrapper />);
  expect(StandardImageWrapper).toHaveStyleRule('margin', '0');
  expect(StandardImageWrapper).toHaveStyleRule('padding', '0');
  expect(StandardImageWrapper).toHaveStyleRule('border', '0');
  expect(StandardImageWrapper).toHaveStyleRule('vertical-align', 'baseline');
  expect(StandardImageWrapper).toHaveStyleRule('font', '100%');
});

test('Styled Product Image have the correct styles', () => {
  const ProductImageWrapper = mount(<StyledProductImageWrapper />);
  expect(ProductImageWrapper).toHaveStyleRule('display', 'flex');
  expect(ProductImageWrapper).toHaveStyleRule('align-items', 'center');
  expect(ProductImageWrapper).toHaveStyleRule('flex-flow', 'row nowrap');
});

test('Styled Image have the correct styles', () => {
  const Image = mount(<StyledImage />);
  expect(Image).toHaveStyleRule('margin-right', '16px');
  expect(Image).toHaveStyleRule('width', '72px');
  expect(Image).toHaveStyleRule('height', '72px');
  expect(Image).toHaveStyleRule('border', '1px solid #cacad1');
  expect(Image).toHaveStyleRule('border-radius', '4px');
});
