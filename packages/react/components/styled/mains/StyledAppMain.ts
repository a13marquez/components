import styled from 'styled-components';
import { StyledStandardMain } from './StyledStandardMain';

export const StyledMain = styled(StyledStandardMain)`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 1088px;
  max-height: 648px;
  width: calc(100% - 64px);
  height: calc(100% - 64px);
  border-radius: 4px;
  background-color: #ffffff;
  transform: translate(-50%,-50%);
`