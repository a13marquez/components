import * as React from 'react';
import { StyledCenteredMain } from '../../styled/mains';

export const Main: React.FunctionComponent = (props) => (
  <StyledCenteredMain>
    {props.children}
  </StyledCenteredMain>
)