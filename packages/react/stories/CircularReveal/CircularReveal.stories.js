import React from 'react';
import { storiesOf } from '@storybook/react';
import { CircularReveal } from '../../components/CircularReveal/CircularReveal';
import avatar from './avatar.jpeg'


storiesOf('Circular Reveal', module)
  .add('Empty', () => (
    <CircularReveal
      content={'Oziiiii'}
      src={avatar}
      alt={'Avatar'}
    ></CircularReveal>
  ))
 
  
