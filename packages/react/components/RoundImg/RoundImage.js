import React from 'react';
import { StyledRoundImage } from './StyledRoundImg';

export const RoundImage = (props) => (
  <StyledRoundImage
    src={props.src}
    backgroundColor={props.backgroundColor}
    height={props.height}>
    {props.children}
  </StyledRoundImage>
)
