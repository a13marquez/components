import styled from 'styled-components';
import StyledStandardSpan from './StyledStandardSpan';

interface StyledBoldSpanProps {
  fontSize?: string;
}

const StyledBoldSpan = styled(StyledStandardSpan)<StyledBoldSpanProps>`
  font-size: ${props => props.fontSize || '16px'};
  font-weight: bold;
`;

export default StyledBoldSpan;