import styled from 'styled-components';
import StyledStandardH1  from './StyledStandardH1';

interface StyledBorderedHeaderProps {
  readonly borderTop?: string;
  readonly borderRight?: string;
  readonly borderBottom?: string;
  readonly borderLeft?: string;
}

const StyledBorderedHeader = 
  styled(StyledStandardH1)<StyledBorderedHeaderProps>`
  padding-bottom: 16px;
  border-top: ${props => 
    props.borderTop || '1px solid rgba(33, 34, 64, 0.16)'};
  border-right: ${props => 
    props.borderRight || '1px solid rgba(33, 34, 64, 0.16)'};
  border-bottom: ${props => 
    props.borderBottom || '1px solid rgba(33, 34, 64, 0.16)'};
  border-left: ${props => 
    props.borderLeft || '1px solid rgba(33, 34, 64, 0.16)'};
`;

export default StyledBorderedHeader;