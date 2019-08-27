import styled from 'styled-components'

interface StyledRoundImageProps {
  readonly height?: string;
  readonly backgroundColor?: string;
}

export const StyledRoundImage = styled.img<StyledRoundImageProps>`
  border-radius:50%;
  height: ${props => props.height || '50px'};
  width: ${props => props.height || '50px'};
  background-color: ${props => props.backgroundColor || '#000'};
`;
