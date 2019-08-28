import styled from 'styled-components';
import { StyledStandardList } from './StyledStandardList'
import { BigVerticalPaddingStyles, BorderBottomStyles } from '../shared-styles';

export const StyledPaddedList = styled(StyledStandardList)`
  ${BigVerticalPaddingStyles}
  ${BorderBottomStyles}
`