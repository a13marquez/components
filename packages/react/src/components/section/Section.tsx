import * as React from 'react';
import StyledSectionWithPadding 
  from '@bit/a13marquez.styled-components.styled-padded-section';

export const Section: React.FunctionComponent =  (props) => (
  <StyledSectionWithPadding>
    {props.children}
  </StyledSectionWithPadding>
)
