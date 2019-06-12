/// <reference path=""

import styled from 'styled-components';

export const StyledBar = styled.div`
  width: ${props => props.width || '35px'};
  height:${ props => props.height || '5px'};
  background-color: ${props => props.backgroundColor || '#333'};
  margin: 6px 0;
  transition: ${props => props.transition || '0.4s'}
  &.change{
    &.bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
      left: 0;
    }
    &.bar2 {
      opacity: 0;
    }
    &.bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
`;

const StyledBurguerIcon = styled.div`
  cursor: pointer;
  height: ${props => props.height || '100px'};
  width: ${props => props.width || '40px'};
`

export default StyledBurguerIcon;