import styled from 'styled-components';
import { StandardStyles } from '../shared-styles';

export const StyledSummaryRow = styled.li`
  ${StandardStyles}
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
`