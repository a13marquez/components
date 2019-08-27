import * as React from 'react';
import { StyledSectionWithPadding } from '../styled/sections';

export const Section: React.FunctionComponent =  (props) => (
  <StyledSectionWithPadding>
    {props.children}
  </StyledSectionWithPadding>
)
