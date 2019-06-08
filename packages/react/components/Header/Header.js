import React from 'react';
import  StyledHeader  from './StyledHeader';
import PropTypes from 'prop-types'; 

export const Header = (props) => (
  <StyledHeader>
    {props.children}
  </StyledHeader>
);


Header.propTypes = {
  children: PropTypes.any
}

