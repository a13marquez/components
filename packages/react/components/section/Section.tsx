import * as React from 'react';
import { StyledProductsSection } from '../styled/sections/StyledProductsSection';

export const Section: React.FunctionComponent =  (props) => (
  <StyledProductsSection>
    {props.children}
  </StyledProductsSection>
)
