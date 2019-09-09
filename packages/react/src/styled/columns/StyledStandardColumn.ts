import styled from 'styled-components';
import shared from '../shared-styles';

interface StyledStandardColumnProps {
  width?: string;
}

const StyledStandardColumn = styled.div<StyledStandardColumnProps>`
  ${shared.StandardStyles}
  display: flex;
  align-items: center;
  width: ${props => props.width || '20%'};
  &:nth-child(n + 2) {
    justify-content: center;
  }
`;


export default StyledStandardColumn;