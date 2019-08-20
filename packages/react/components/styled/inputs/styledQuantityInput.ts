import styled from 'styled-components';
import { StyledStandardInput } from './StyledStandardInput';

export const StyledQuantityInput = styled(StyledStandardInput)`
  width: 40px;
  height: 40px;
  border: 2px solid #dbdbe0;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type=number] {
    -moz-appearance:textfield;
  }
`