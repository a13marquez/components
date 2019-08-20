import  *  as React from 'react';
import { StyledBurguerIcon, StyledBar } from '../styled/rest';

interface BurguerButtonProps {
  height?: string;
  width?: string;
  className?: string;
  onClick?: any;
  barWidth?: string;
  barHeight?: string;
  barColor?: string;
  barTransition?: string;
  
}

export const BurguerButton: React.FunctionComponent<BurguerButtonProps> 
  = (props) => {
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <StyledBurguerIcon
    className={props.className}
    onClick={() => {
      props.onClick && props.onClick();
      setIsOpened(!isOpened)
    }}
    height={props.height}
    width={props.width}>
    <StyledBar
      className={`bar1 ${isOpened ? 'change' : ''}`} 
      width={props.barWidth}
      height={props.barHeight}
      backgroundColor={props.barColor}
      transition={props.barTransition}/>
    <StyledBar
      className={`bar2 ${isOpened ? 'change' : ''}`} 
      width={props.barWidth}
      height={props.barHeight}
      backgroundColor={props.barColor}
      transition={props.barTransition}/>
    <StyledBar
      className={`bar3 ${isOpened ? 'change' : ''}`} 
      width={props.barWidth}
      height={props.barHeight}
      backgroundColor={props.barColor}
      transition={props.barTransition}/>
  </StyledBurguerIcon>
  )
};