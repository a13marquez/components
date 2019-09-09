import styled from 'styled-components';
import StyledStandardImageWrapper from './StyledStandardImageWrapper';

const StyledCenteredImageWrapper = styled(StyledStandardImageWrapper)`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

export default StyledCenteredImageWrapper;