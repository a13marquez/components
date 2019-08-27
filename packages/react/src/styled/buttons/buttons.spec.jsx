import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardButton } from './StyledStandardButton';
import { StyledCountButton } from './StyledCountButton';
import { StyledCheckoutButton } from './StyledCheckoutButton';


test('It renders Styled Standard Button ', () => {
  const StandardButton = mount(<StyledStandardButton />);
  expect(StandardButton).toMatchSnapshot();
});

test('It renders Styled Count Button ', () => {
  const CountButton = mount(<StyledCountButton />);
  expect(CountButton).toMatchSnapshot();
});

test('It renders Styled Checkout Button ', () => {
  const CheckoutButton = mount(<StyledCheckoutButton />);
  expect(CheckoutButton).toMatchSnapshot();
});

test('Styled Standard button have the correct styles', () => {
  const StandardButton = mount(<StyledStandardButton />);
  expect(StandardButton).toHaveStyleRule('font-size', '20px');
  expect(StandardButton).toHaveStyleRule('line-height', '25px');
});

test('Styled Count button have the correct styles', () => {
  const CountButton = mount(<StyledCountButton />);
  expect(CountButton).toHaveStyleRule('font-size', '20px');
  expect(CountButton).toHaveStyleRule('line-height', '25px');
  expect(CountButton).toHaveStyleRule('padding', '0 8px');
  expect(CountButton).toHaveStyleRule('height', '40px');
  expect(CountButton).toHaveStyleRule('border', 'none');
  expect(CountButton).toHaveStyleRule('background', 'transparent');
  expect(CountButton).toHaveStyleRule('color', '#7350ff');
  expect(CountButton).toHaveStyleRule('font-weight', 'bold');
  expect(CountButton).toHaveStyleRule('cursor', 'pointer');
});

test('Styled Checkout button have the correct styles', () => {
  const CheckoutButton = mount(<StyledCheckoutButton />);
  expect(CheckoutButton).toHaveStyleRule('margin-top', '24px');
  expect(CheckoutButton).toHaveStyleRule('padding-top', '16px');
  expect(CheckoutButton).toHaveStyleRule('padding-bottom', '16px');
  expect(CheckoutButton).toHaveStyleRule('width', '100%');
  expect(CheckoutButton).toHaveStyleRule('border-radius', '4px');
  expect(CheckoutButton).toHaveStyleRule('background', '#7350ff');
  expect(CheckoutButton).toHaveStyleRule('color', '#ffffff');
  expect(CheckoutButton).toHaveStyleRule('font-size', '16px');
  expect(CheckoutButton).toHaveStyleRule('font-weight', 'bold');
  expect(CheckoutButton).toHaveStyleRule('line-height', '14px');
  expect(CheckoutButton).toHaveStyleRule('cursor', 'pointer');
});
