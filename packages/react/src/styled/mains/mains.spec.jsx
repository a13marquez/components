import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import StyledStandardMain from './StyledStandardMain';
import StyledCenteredMain from './StyledCenteredMain';

test('It renders Styled Standard Main', () => {
  const StandardMain = mount(<StyledStandardMain />);
  expect(StandardMain).toMatchSnapshot();
});

test('It renders Styled Main App', () => {
  const MainApp = mount(<StyledCenteredMain />);
  expect(MainApp).toMatchSnapshot();
});

test('Styled Standard Row have the correct styles', () => {
  const StandardMain = mount(<StyledStandardMain />);
  expect(StandardMain).toHaveStyleRule('margin', '0');
  expect(StandardMain).toHaveStyleRule('padding', '0');
  expect(StandardMain).toHaveStyleRule('border', '0');
  expect(StandardMain).toHaveStyleRule('vertical-align', 'baseline');
  expect(StandardMain).toHaveStyleRule('font', '100%');
});

test('Styled Product Title Row have the correct styles', () => {
  const MainApp = mount(<StyledCenteredMain />);
  expect(MainApp).toHaveStyleRule('margin', '0');
  expect(MainApp).toHaveStyleRule('padding', '0');
  expect(MainApp).toHaveStyleRule('border', '0');
  expect(MainApp).toHaveStyleRule('vertical-align', 'baseline');
  expect(MainApp).toHaveStyleRule('font', '100%');

  expect(MainApp).toHaveStyleRule('position', 'fixed');
  expect(MainApp).toHaveStyleRule('top', '50%');
  expect(MainApp).toHaveStyleRule('left', '50%');
  expect(MainApp).toHaveStyleRule('display', 'flex');
  expect(MainApp).toHaveStyleRule('overflow-x', 'hidden');
  expect(MainApp).toHaveStyleRule('overflow-y', 'auto');
  expect(MainApp).toHaveStyleRule('max-width', '1088px');
  expect(MainApp).toHaveStyleRule('max-height', '648px');
  expect(MainApp).toHaveStyleRule('width', 'calc(100% - 64px)');
  expect(MainApp).toHaveStyleRule('height', 'calc(100% - 64px)');
  expect(MainApp).toHaveStyleRule('border-radius', '4px');
  expect(MainApp).toHaveStyleRule('background-color', '#fff');
});
