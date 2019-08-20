import  styled from 'styled-components';
import { StandardStyles } from '../shared-styles';

export const StyledStandardRow = styled.li`
  ${StandardStyles}
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  + li {
    margin-top: 32px;
  }
`