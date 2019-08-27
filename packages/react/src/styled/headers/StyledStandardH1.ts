import styled from 'styled-components';
import { StandardHProps } from './interfaces';
import { StandardStyles } from '../shared-styles';

export const StyledStandardH1 = styled.h1<StandardHProps>`
  ${StandardStyles}
  color: ${props => props.color || '#7350ff'};
  background-color: ${props => props.backgroundColor || '#fff'};
  position: relative;
  letter-spacing: -0.18px;
  font-size: 18px;
  line-height: 24px;
`