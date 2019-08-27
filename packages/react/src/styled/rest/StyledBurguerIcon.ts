import styled from 'styled-components';

interface StyledBurguerProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  transition?: string;
  transform?: string;

}

export const StyledBurguerIcon = styled.div<StyledBurguerProps>`
  cursor: pointer;
  margin: 6px 0;
  transition: ${props => props.transition || '0.4s'};
  width:${props => props.width || '100px'}
  height:${props => props.height || '100px'}
  .change{
    :first-of-type {
      -webkit-transform: ${props => props.transform || 
        'rotate(-45deg) translate(-9px, 6px)' };
      transform: ${props => props.transform || 
        'rotate(-45deg) translate(-9px, 6px)' };
      left: 0;
    }
    :nth-child(2) {
      opacity: 0;
    }
    :last-of-type {
      -webkit-transform: ${props => props.transform || 
        'rotate(45deg) translate(-8px, -8px)' };
      transform:  ${props => props.transform || 
        'rotate(45deg) translate(-8px, -8px)' };
    }
  }
`;
