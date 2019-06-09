import React from 'react';
import  StyledHeader  from './StyledHeader';
import PropTypes from 'prop-types'; 

export const Header = (props) => (
  <StyledHeader
    height={props.height}
    padding={props.padding}
    backgroundColor={props.backgroundColor}
    color={props.color}
    alignItems={props.alignItems}>
    {props.children}
  </StyledHeader>
);


Header.propTypes = {
  children: PropTypes.any
}

