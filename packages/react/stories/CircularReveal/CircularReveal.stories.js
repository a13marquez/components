import React from 'react';
import { storiesOf } from '@storybook/react';
import CircularReveal from '../../src/components/CircularReveal/CircularReveal';
import avatar from './avatar.jpeg'


storiesOf('Circular Reveal', module)
  .add('Empty', () => (
    <CircularReveal
      easing={0.8}
      content={'a13marquez'}
      src={avatar}
      alt={'Avatar'}
    ></CircularReveal>
  ))
 
  
