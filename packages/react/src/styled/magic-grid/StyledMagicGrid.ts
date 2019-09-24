import styled from 'styled-components'

export const StyledMagicGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
grid-gap: 4rem;
width: 100%;
max-width: 1280px;
margin: 0 auto;
margin-bottom: 6rem;
@media (max-width: 30.625em) {
  grid-template-columns: 1fr;
}`;

export default StyledMagicGrid;