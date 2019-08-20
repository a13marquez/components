import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardSection } from './StyledStandardSection';
import { StyledProductsSection } from './StyledProductsSection';

test('It renders Styled Standard Section', () => {
  const StandardSection = mount(<StyledStandardSection />);
  expect(StandardSection).toMatchSnapshot();
});

test('It renders Styled Product Section', () => {
  const ProductsSection = mount(<StyledProductsSection />);
  expect(ProductsSection).toMatchSnapshot();
});

test('Styled Standard Row have the correct styles', () => {
  const StandardSection = mount(<StyledStandardSection />);
  expect(StandardSection).toHaveStyleRule('margin', '0');
  expect(StandardSection).toHaveStyleRule('padding', '0');
  expect(StandardSection).toHaveStyleRule('border', '0');
  expect(StandardSection).toHaveStyleRule('vertical-align', 'baseline');
  expect(StandardSection).toHaveStyleRule('font', '100%');
});

test('Styled Product Title Row have the correct styles', () => {
  const ProductsSection = mount(<StyledProductsSection />);
  expect(ProductsSection).toHaveStyleRule('margin', '0');
  expect(ProductsSection).toHaveStyleRule('border', '0');
  expect(ProductsSection).toHaveStyleRule('vertical-align', 'baseline');
  expect(ProductsSection).toHaveStyleRule('font', '100%');

  expect(ProductsSection).toHaveStyleRule('padding', '40px 32px 40px 56px');
  expect(ProductsSection).toHaveStyleRule('flex', '1');
});
