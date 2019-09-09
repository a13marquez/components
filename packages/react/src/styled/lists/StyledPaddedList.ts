import styled from 'styled-components';
import StyledStandardList  from './StyledStandardList'
import shared  from '../shared-styles';

const StyledPaddedList = styled(StyledStandardList)`
  ${shared.BigVerticalPaddingStyles}
  ${shared.BorderBottomStyles}
`;

export default StyledPaddedList;