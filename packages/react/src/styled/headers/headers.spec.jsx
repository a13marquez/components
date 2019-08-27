import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledStandardH1 } from './StyledStandardH1';
import { StyledStandardH2 } from './StyledStandardH2';
import { StyledBorderedHeader } from './StyledBorderedHeader';

test('It renders Styled Standard Big Header', () => {
  const StandardBigHeader = mount(<StyledStandardH1 />);
  expect(StandardBigHeader).toMatchSnapshot();
});

test('It renders Styled Standard Medium Header', () => {
  const StandardH2 = mount(<StyledStandardH2 />);
  expect(StandardH2).toMatchSnapshot();
});

test('It renders Styled Main Header', () => {
  const MainHeader = mount(<StyledBorderedHeader />);
  expect(MainHeader).toMatchSnapshot();
});

test('Styled Standard Big Header have the correct styles', () => {
  const StandardBigHeader = mount(<StyledStandardH1 />);
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
  const StandardH2 = mount(<StyledStandardH2 />);
  expect(StandardH2).toHaveStyleRule('margin', '0');
  expect(StandardH2).toHaveStyleRule('padding', '0');
  expect(StandardH2).toHaveStyleRule('border', '0');
  expect(StandardH2).toHaveStyleRule('vertical-align', 'baseline');
  expect(StandardH2).toHaveStyleRule('font', '100%');
  expect(StandardH2).toHaveStyleRule('color', '#717285');
  expect(StandardH2).toHaveStyleRule('letter-spacing', '0');
  expect(StandardH2).toHaveStyleRule('font-weight', '300');
  expect(StandardH2).toHaveStyleRule('text-transform', 'uppercase');
  expect(StandardH2).toHaveStyleRule('font-size', '12px');
  expect(StandardH2).toHaveStyleRule('line-height', '16px');
});
test('Styled Main Header have the correct styles', () => {
  const MainHeader = mount(<StyledBorderedHeader />);
  expect(MainHeader).toHaveStyleRule('margin', '0');
  expect(MainHeader).toHaveStyleRule('padding', '0');
  expect(MainHeader).toHaveStyleRule('border', '0');
  expect(MainHeader).toHaveStyleRule('vertical-align', 'baseline');
  expect(MainHeader).toHaveStyleRule('font', '100%');
  expect(MainHeader).toHaveStyleRule('padding-bottom', '16px');
  expect(MainHeader).toHaveStyleRule('border-bottom', '1px solid rgba(33,34,64,0.16)');
});
