import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../../src/components/Header/Header';



storiesOf('Header', module)
  .add('Empty', () => (
    <Header></Header>
  ))
  .add('with link', () => (
    <Header>
       <a href="#" target="_blank">
        Test link
      </a>
    </Header>
  ))
  .add('with nav', () => (
    <Header>
    <nav>
      <ul>
        <li><a href="#top">Top</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#getting-around">Travel</a></li>
        <li><a href="#famous-quotes">Quotes</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#social-media">Links</a></li>
      </ul>  
    </nav>
    </Header>
  ))
  .add('with nav and link', () => (
    <Header>
      <a href="#" target="_blank">
        Test link
      </a>
      <nav>
        <ul>
          <li><a href="#top">Top</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#getting-around">Travel</a></li>
          <li><a href="#famous-quotes">Quotes</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#social-media">Links</a></li>
        </ul>  
      </nav>
    </Header>
  ))

