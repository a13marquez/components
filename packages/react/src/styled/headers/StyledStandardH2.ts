import styled from 'styled-components';
import StandardHProps from './interfaces';
import shared from '../shared-styles';

export const StyledStandardH2 = styled.h2<StandardHProps>`
  ${shared.StandardStyles}
  color: ${props => props.color || '#717285'};
  background-color: ${props => props.backgroundColor || '#fff'};
  letter-spacing: 0;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  + * {
    margin-top: 16px;
  }
`;

export default StyledStandardH2;