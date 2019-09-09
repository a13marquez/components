import styled from 'styled-components';
import StyledStandardParagraph from './StyledStandardParagraph';

const StyledSmallTextParagraph = styled(StyledStandardParagraph)`
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  color: #a6a7b3;
  letter-spacing: 0.13px;
  font-weight: 400;
`;

export default StyledSmallTextParagraph;