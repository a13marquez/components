import styled from 'styled-components';

interface StyledMagicGridSectionProps {
  background?: string
}

export const StyledMagicGridSection = 
  styled.section<StyledMagicGridSectionProps>`
  text-align: center;
  padding: 10rem 2rem;
  background: ${props => props.background || '#45567d'};
 `; 

 export default StyledMagicGridSection;
