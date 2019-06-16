import React, { useState } from 'react';
import StyledResponsiveMenu from './StyledResponsiveMenu';
import BurguerButton from '../BurguerButton';

export const ResponsiveMenu = (props) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick =  e => {
    setIsOpened(!isOpened);
  }
  return (
    <StyledResponsiveMenu
    fontSize={props.fontSize}
    color={props.color}>
    <BurguerButton
      onClick={handleClick}
      className="burguer__icon"
      height={props.burguerHeight}
      width={props.burguerWidth}
      barWidth={props.burguerBarWidth}
      barHeight={props.burguerBarHeight}
      barColor={props.burguerBarColor}
      barTransition={props.burguerBarTransition}/>
    <div className={`rm__list${isOpened ? '__visible' : ''}`}>
    <ul >
      {props.items && props.items.length ? 
        props.items.map(item =>(
          <li 
            key={item.id}
            onClick={item.onClick}
            ><a>{item.name}</a></li>
        )) : 
        null
      }
    </ul>
    </div>
  </StyledResponsiveMenu>
  )
};