import styled from 'styled-components'
import PropTypes from 'prop-types';

export const StyledHeader = styled.header`
  background-color: ${props => props.backgroundColor || 'rgba(0, 0, 0, .7)'}; 
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width:  100%;
  height: ${props => props.height || '80px'};
  color: ${props => props.color || 'white' };
  padding: ${props => props.padding || '35px 100px 20px'};
  display: flex;
  justify-content: space-around;
  align-items: ${props => props.alignItems || 'left'};
  `;

  StyledHeader.propTypes = {
    backgroundColor: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    padding: PropTypes.string,
    alignItems: PropTypes.string,
  }
