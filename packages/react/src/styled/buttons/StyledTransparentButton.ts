import styled from 'styled-components';
import StyledStandardButton from './StyledStandardButton';

const StyledTransparentButton = styled(StyledStandardButton)`
  padding: 0 8px;
  height: 40px;
  border: none;
  background: transparent;
  color: ${props => props.color || '#000'};
  font-weight: bold;
  cursor: pointer;
`;

export default StyledTransparentButton;
