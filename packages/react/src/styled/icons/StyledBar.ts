import styled from 'styled-components';

interface StyledBarProps {
  readonly width?: string;
  readonly height?: string;
  readonly backgroundColor?: string;
  readonly margin?: string;
  readonly transition?: string;
  readonly opacity?: string;
}

const StyledBar = styled.div<StyledBarProps>`
  width: ${props => props.width || '35px'};
  height:${ props => props.height || '5px'};
  background-color: ${props => props.backgroundColor || 'rgba(51,51,51, .6)'};
  margin: ${props => props.margin || '6px 0'}; 
  transition: ${props => props.transition || '0.4s'};
  opacity:  ${props => props.opacity || '6'};
`;

export default StyledBar