import styled from 'styled-components';

interface StyledBarProps {
  width?: string
  height?: string
  backgroundColor?: string
  margin?: string
  transition?: string
}

export const StyledBar = styled.div<StyledBarProps>`
  width: ${props => props.width || '35px'};
  height:${ props => props.height || '5px'};
  background-color: ${props => props.backgroundColor || '#333'};
  margin: ${props => props.margin || '6px 0'}; 
  transition: ${props => props.transition || '0.4s'};
`;