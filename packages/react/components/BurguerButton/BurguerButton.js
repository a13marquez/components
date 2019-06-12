import React, { useState } from 'react';
import StyledBurguerIcon, {StyledBar} from './StyledBurguerButton';

export const BurguerButton = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  function click() {
    props.onClick && props.onClick();
    setIsOpened(!isOpened)
  }
  return (
    <StyledBurguerIcon
    onClick={click}
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