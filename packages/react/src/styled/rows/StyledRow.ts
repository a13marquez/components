import styled from 'styled-components';
import shared from '../shared-styles';

const StyledRow = styled.li`
  ${shared.StandardStyles}
  font-size: 14px;
  line-height: 17px;
  display: flex;
  justify-content: space-between;
  *:nth-child(2) {
    font-weight: bold;
  }
  + li {
    margin-top: 20px;
  }
`;

export default StyledRow;