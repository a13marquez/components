import styled from 'styled-components';
import StyledStandardSection from './StyledStandardSection';

interface StyleSectionWithPaddingProps {
  readonly padding?: string;
}

export const StyledSectionWithPadding = 
  styled(StyledStandardSection)<StyleSectionWithPaddingProps>`
  padding: ${props => props.padding || '40px 32px 40px 56px'};
  flex:1;
`;

export default StyledSectionWithPadding