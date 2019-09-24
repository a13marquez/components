import React from 'react';
import { storiesOf } from '@storybook/react';
import ResponsiveMenu from '../../src/components/ResponsiveMenu/ResponsiveMenu';


const items= [
  {id: 1, name: 'item1'},
  {id: 2, name: 'item2'},
  {id: 3, name: 'item3'},
  {id: 4, name: 'item4'},
];

storiesOf('Responsive Menu', module)
  .add('Empty', () => (
    <ResponsiveMenu
      items={items}>
    </ResponsiveMenu>
  ))
  

