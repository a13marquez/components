import * as React from 'react';
import StyledCenteredMain 
  from '@bit/a13marquez.styled-components.styled-centered-main';

export const Main: React.FunctionComponent = (props) => (
  <StyledCenteredMain>
    {props.children}
  </StyledCenteredMain>
)