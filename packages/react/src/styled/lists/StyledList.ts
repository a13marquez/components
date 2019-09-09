import styled from 'styled-components';
import StyledStandardList from './StyledStandardList'

interface StyledList {
  tableHead: boolean;
}

const StyledList = styled(StyledStandardList)<any>`
  position: relative;
  width: 100%;
  padding-left: 0;
  ${(props) => props.tableHead ?  'padding: 32px 0' : ''  }
`;

export default StyledList;