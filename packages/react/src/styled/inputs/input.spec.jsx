import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import StyledStandardInput from './StyledStandardInput';
import StyledQuantityInput from './styledQuantityInput';


test('It renders Styled Standard Input', () => {
  const StandardInput = mount(<StyledStandardInput />);
  expect(StandardInput).toMatchSnapshot();
});

test('It renders Styled Quantity Input', () => {
  const QuantityInput = mount(<StyledQuantityInput />);
  expect(QuantityInput).toMatchSnapshot();
});


test('Styled Standard Input have the correct styles', () => {
  const StandardInput = mount(<StyledStandardInput />);
  expect(StandardInput).toHaveStyleRule('font-size', '14px');
  expect(StandardInput).toHaveStyleRule('line-height', '17px');
});

test('Styled Quantity Input have the correct styles', () => {
  const QuantityInput = mount(<StyledQuantityInput />);
  expect(QuantityInput).toHaveStyleRule('font-size', '14px');
  expect(QuantityInput).toHaveStyleRule('line-height', '17px');
  expect(QuantityInput).toHaveStyleRule('width', '40px');
  expect(QuantityInput).toHaveStyleRule('height', '40px');
  expect(QuantityInput).toHaveStyleRule('border', '2px solid #dbdbe0');
  expect(QuantityInput).toHaveStyleRule('border-radius', '4px');
  expect(QuantityInput).toHaveStyleRule('text-align', 'center');
  expect(QuantityInput).toHaveStyleRule('font-size', '14px');
  expect(QuantityInput).toHaveStyleRule('line-height', '17px');
});
