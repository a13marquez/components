import React from 'react';
import  StyledHeader  from './StyledHeader';
import PropTypes from 'prop-types'; 

export const Header = (props) => (
  <StyledHeader
    backgroundColor={props.backgroundColor}
    color={props.color}>
    {props.children}
  </StyledHeader>
);


Header.propTypes = {
  children: PropTypes.any
}

