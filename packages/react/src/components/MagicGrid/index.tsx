import * as React from 'react';
import StyledMagicGridSection 
  from '@bit/a13marquez.styled-components.styled-magic-grid-section';
import StyledMagicGrid 
  from '@bit/a13marquez.styled-components.styled-magic-grid';


interface MagicGridProps {
  color?: string;
  children: React.Component
}

const MagicGrid: React.FunctionComponent<MagicGridProps> = 
  ({color, children}) => (
  <StyledMagicGridSection>
    <StyledMagicGrid>
      {children}
    </StyledMagicGrid>
  </StyledMagicGridSection>
);

export default MagicGrid



  