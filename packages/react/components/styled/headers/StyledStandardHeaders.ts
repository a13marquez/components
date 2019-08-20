import styled from 'styled-components';
import { StandardStyles } from '../shared-styles';



export const StyledStandardBigHeader = styled.h1`
  ${StandardStyles}
  position: relative;
  letter-spacing: -0.18px;
  font-size: 18px;
  line-height: 24px;
`

export const StyledStandardMediumHeader = styled.h2`
  ${StandardStyles}
  color: #717285;
  letter-spacing: 0;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  + * {
    margin-top: 16px;
  }
`