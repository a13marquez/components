import styled from 'styled-components';
import StyledStandardButton from './StyledStandardButton';

interface StyledButtonProps {
  background?: string;
  color?: string;
}

const StyledButton = styled(StyledStandardButton)<StyledButtonProps>`
  margin-top: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  border-radius: 4px;
  background: ${props => props.background || '#000'};
  color: ${props => props.color || '#fff'};
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
  cursor: pointer;
`;

export default StyledButton;