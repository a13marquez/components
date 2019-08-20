import * as React from 'react';
import { StyledResponsiveMenu } from './StyledResponsiveMenu';
import { BurguerButton } from '../BurguerButton';

interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly onClick: () => void;
}

interface ResponsiveMenuProps {
  readonly fontSize?: string;
  readonly color: string;
  readonly burguerHeight?: string;
  readonly burguerWidth?: string;
  readonly burguerBarWidth?: string;
  readonly burguerBarHeight?: string;
  readonly burguerBarColor?: string;
  readonly burguerBarTransition?: string;
  readonly items: MenuItem[];
}

export const ResponsiveMenu: React.FunctionComponent<ResponsiveMenuProps> = 
  (props) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const handleClick: (event: React.MouseEvent) => void = event => {
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