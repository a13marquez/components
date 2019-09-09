import * as React from 'react';
import StyledHeader from '@bit/a13marquez.styled-components.styled-header';

interface HeaderProps {
  readonly backgroundColor?: string;
  readonly color?: string;
  readonly height?: string;
  readonly padding?: string;
  readonly alignItems?: string;
  readonly justifyContent?: string;
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => (
  <StyledHeader
    height={props.height}
    padding={props.padding}
    backgroundColor={props.backgroundColor}
    color={props.color}
    alignItems={props.alignItems}
    justifyContent={props.justifyContent}>
    {props.children}
  </StyledHeader>
);
