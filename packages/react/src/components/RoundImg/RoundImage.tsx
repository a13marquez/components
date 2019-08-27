import * as React from 'react';
import { StyledRoundImage } from '../../styled/Images/StyledRoundImg';

interface RoundImageProps {
  readonly src?: string;
  readonly backgroundColor?: string;
  readonly height?: string;
  readonly alt: string;
}

export const RoundImage:React.FunctionComponent<RoundImageProps> = 
  (props) => (
  <StyledRoundImage
    src={props.src}
    backgroundColor={props.backgroundColor}
    height={props.height}
    alt={props.alt}>
    {props.children}
  </StyledRoundImage>
)
