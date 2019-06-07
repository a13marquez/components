import React from 'react';
import { StyledHeader } from './styledHeader';
import PropTypes from 'prop-types'; 

export const Header = (props) => (
  <StyledHeader>
    {props.children}
  </StyledHeader>
);


Header.propTypes = {
  children: PropTypes.string
}

