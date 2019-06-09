import styled from 'styled-components'

const StyledRoundImage = styled.img`
  border-radius:50%;
  height: ${props => props.height || '50px'}
  background-color: ${props => props.backgroundColor || '#000'}
`;

export default StyledRoundImage;