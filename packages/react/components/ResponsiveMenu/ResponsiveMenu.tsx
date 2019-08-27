import * as React from 'react';
import { StyledResponsiveMenu } from '../styled/menu/StyledResponsiveMenu';
import { BurguerButton } from '../BurguerButton';

interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly onClick: () => void;
  readonly link: string;
}

interface ResponsiveMenuProps {
  readonly fontSize?: string;
  readonly color: string;
  readonly backgroundColor?: string;
  readonly burguerHeight?: string;
  readonly burguerWidth?: string;
  readonly burguerBarWidth?: string;
  readonly burguerBarHeight?: string;
  readonly burguerBarColor?: string;
  readonly burguerBarTransition?: string;
  readonly burguerBarOpacity?: string;
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
      backgroundColor={props.backgroundColor}
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
        barTransition={props.burguerBarTransition}
        opacity={props.burguerBarOpacity}/>
      <div className={`rm__list${isOpened ? '__visible' : ''}`}>
        <ul >
          {props.items && props.items.length ? 
            props.items.map(item =>(
              <li 
                key={item.id}
                onClick={item.onClick}>
                  <a href={item.link || '#'}>{item.name}</a>
              </li>
            )) : 
            null
          }
        </ul>
      </div>
    </StyledResponsiveMenu>
  )
};