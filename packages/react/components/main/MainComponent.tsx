import * as React from 'react';
import { StyledMain } from '../styled/mains/StyledAppMain';

export const Main: React.FunctionComponent = (props) => (
  <StyledMain>
    {props.children}
  </StyledMain>
)