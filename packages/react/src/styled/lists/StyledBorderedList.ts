import styled from 'styled-components';
import StyledStandardList  from './StyledStandardList'
import shared  from '../shared-styles';

const StyledBorderedList = styled(StyledStandardList)`
  ${shared.BorderBottomStyles}
`;

export default StyledBorderedList;