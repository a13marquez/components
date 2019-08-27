import styled from 'styled-components';
import { StyledStandardAside } from './StyledStandardAside';

export const StyledSummaryAside = styled(StyledStandardAside)`
  display: flex;
  flex-flow: column wrap;
  padding: 40px 32px;
  width: 312px;
  background-color: #f3f3f3;
  color: #212240;
  > * {
    width: 100%;
  }
`