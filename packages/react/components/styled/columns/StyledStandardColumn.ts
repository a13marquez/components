import styled from 'styled-components';
import { StandardStyles } from '../shared-styles';

interface StyledStandardColumnProps {
  readonly width?: string;
}

export const StyledStandardColumn = styled.div<StyledStandardColumnProps>`
  ${StandardStyles}
  display: flex;
  align-items: center;
  width: ${props => props.width || '20%'}
  &:nth-child(n + 2) {
    justify-content: center;
  }
`