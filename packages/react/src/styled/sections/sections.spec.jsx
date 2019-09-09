import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import StyledStandardSection from './StyledStandardSection';
import StyledSectionWithPadding from './StyledPaddedSection';

test('It renders Styled Standard Section', () => {
  const StandardSection = mount(<StyledStandardSection />);
  expect(StandardSection).toMatchSnapshot();
});

test('It renders Styled Section with padding', () => {
  const SectionWithPadding = mount(<StyledSectionWithPadding />);
  expect(SectionWithPadding).toMatchSnapshot();
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
  const SectionWithPadding = mount(<StyledSectionWithPadding />);
  expect(SectionWithPadding).toHaveStyleRule('margin', '0');
  expect(SectionWithPadding).toHaveStyleRule('border', '0');
  expect(SectionWithPadding).toHaveStyleRule('vertical-align', 'baseline');
  expect(SectionWithPadding).toHaveStyleRule('font', '100%');

  expect(SectionWithPadding).toHaveStyleRule('padding', '40px 32px 40px 56px');
  expect(SectionWithPadding).toHaveStyleRule('flex', '1');
});
