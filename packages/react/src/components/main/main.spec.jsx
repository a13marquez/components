import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Main } from './MainComponent';

describe('Main Component: ', () => {
  let main;
  beforeEach(() => {
    main = mount(
      <Main>
        <div />
      </Main>,
    );
  });
  afterEach(() => {
    main = null;
  });
  test('It renders Main component', () => {
    expect(main).toMatchSnapshot();
  });

  test('It renders Main with props', () => {
    expect(main.props().children.type).toBe('div');
  });
});
