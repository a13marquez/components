import styled from 'styled-components';
import shared from '../shared-styles';


const StyledRightAlignWrapper = styled.div`
  ${shared.StandardStyles}
  align-self: flex-end;
  margin-top: auto;
  padding-top: 16px;
  padding-bottom: 0;
  border-top: 1px solid rgba(33, 34, 64, 0.16);
  color: #212240;
`;

export default StyledRightAlignWrapper;