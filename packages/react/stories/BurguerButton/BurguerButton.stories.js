import React from 'react';
import { storiesOf } from '@storybook/react';
import { BurguerButton } from '../../components/BurguerButton';

storiesOf('Burguer Button', module)
  .add('Default', () => (
    <BurguerButton></BurguerButton>
  ))
  .add('Yellow', () => (
    <BurguerButton
    barColor="yellow"></BurguerButton>
  ))

 
  