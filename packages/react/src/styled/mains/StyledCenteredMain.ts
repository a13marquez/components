import styled from 'styled-components';
import { StyledStandardMain } from './StyledStandardMain';

interface StyledCenteredMainProps {
  backgroundColor?: string;
}

export const StyledCenteredMain = 
  styled(StyledStandardMain)<StyledCenteredMainProps>`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 1088px;
  max-height: 648px;
  width: calc(100% - 64px);
  height: calc(100% - 64px);
  border-radius: 4px;
  background-color: ${props => props.backgroundColor || '#fff'};
`