import styled from 'styled-components';
import { StyledStandardAside } from './StyledStandardAside';

interface StyledColumnAsideProps {
  readonly padding?: string;
  readonly width?: string;
  readonly backgroundColor?: string;
  readonly color?: string;
}

export const StyledColumnAside = 
styled(StyledStandardAside)<StyledColumnAsideProps>`
  display: flex;
  flex-flow: column wrap;
  padding: ${props => props.padding || '40px 32px'};
  width: ${props => props.width || '312px'};
  background-color: ${props => props.backgroundColor || '#f3f3f3'};
  color: ${props => props.color || '#212240'};
  > * {
    width: 100%;
  }
`