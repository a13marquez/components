import  styled from 'styled-components';
import shared from '../shared-styles';

export const StyledStandardRow = styled.li`
  ${shared.StandardStyles}
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  + li {
    margin-top: 32px;
  }
`;

export default StyledStandardRow;