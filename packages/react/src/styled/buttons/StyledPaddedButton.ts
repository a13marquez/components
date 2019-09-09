import styled from 'styled-components';
import StyledStandardButton from './StyledStandardButton';

const StyledPaddedButton = styled(StyledStandardButton)`
  margin-top: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  border-radius: 4px;
  background: #000;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
  cursor: pointer;
`;

export default StyledPaddedButton;