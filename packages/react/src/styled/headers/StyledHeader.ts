import styled from 'styled-components'

interface StyledHeaderProps {
  readonly backgroundColor?: string;
  readonly height?: string;
  readonly padding?: string;
  readonly alignItems?: string;
  readonly justifyContent?: string;
  readonly boxShadow?: string;
}
 
const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  align-items: ${props => props.alignItems || 'flex-end'};
  justify-content:  ${props => props.justifyContent || 'space-around'};;
  background-color: ${props => props.backgroundColor || 'rgba(0, 0, 0, .7)'}; 
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width:  100%;
  height: ${props => props.height || '80px'};
  color: ${props => props.color || 'white' };
  padding: ${props => props.padding || '1em 3em'};
  box-shadow: ${props => props.boxShadow  || ' 0 2px 0 rgba(0, 0, 0, 0.4)'};
  @media (max-width:  28.75em) {
    display: flex;
    padding: 2.5rem;
    justify-content: flex-start
  }
`;

  export default StyledHeader;