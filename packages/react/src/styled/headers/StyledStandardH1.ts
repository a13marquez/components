import styled from 'styled-components';
import  StandardHProps from './interfaces';
import shared from '../shared-styles';

const StyledStandardH1 = styled.h1<StandardHProps>`
  ${shared.StandardStyles}
  color: ${props => props.color || '#7350ff'};
  background-color: ${props => props.backgroundColor || '#fff'};
  position: relative;
  letter-spacing: -0.18px;
  font-size: 18px;
  line-height: 24px;
`

export default StyledStandardH1;