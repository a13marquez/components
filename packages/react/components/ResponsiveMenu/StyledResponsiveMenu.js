import styled from 'styled-components';


const StyledResponsiveMenu = styled.nav`
  .burguer__icon {
    display:none; 
  }
  ul {
    list-style: none
    font-size: ${props => props.fontSize || '14px'};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  li {
    margin: 0 6px;
    text-decoration: none;
    color: ${props => props.color || 'white' };
    opacity: .6;
    font-size: 2em;
  }

  li:first-of-type {
    margin-left: 0;
  }
  li:last-child {
    margin-right: 0;
  }
  li:hover {
    opacity: 1;
  }
  @media (min-width: 500px) {
      background-color: ${
    props => props.backgroundColor || 'rgb(0, 0, 0, .7)'}; 
  }
  @media (max-width: 500px) {
    height: 100vh;
    z-index:0;
    .burguer__icon {
      display:inline;
      z-index: 10;
    }
    .rm__list{
      height:100%
      display: inline-block;
      MozTransform: translate3d(-100%, 0, 0);
      MsTransform: translate3d(-100%, 0, 0);
      OTransform: translate3d(-100%, 0, 0);
      WebkitTransform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      transition: opacity 0.3s, transform 0s 0.3s;
      visibility:hidden;
      opacity:0;
      filter:alpha(opacity=0);
      &__visible {
        background-color: ${
          props => props.backgroundColor || 'rgba(0, 0, 0, .4)'}; 
        visibility:visible;
        opacity:1;
        filter:alpha(opacity=100);
        height: 100%;
        width: 100%;
        list-style:none;
        margin:0;
        padding:0;
        overflow: auto;
        transition: all 0.5s;
        z-index: 10; 
        MozTransform: translate3d(0, 0, 0);
        MsTransform: translate3d(, 0, 0);
        OTransform: translate3d(0, 0, 0);
        WebkitTransform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);  
      }
    }
    ul {
      height: 100vw;
      display: flex
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    li {
      width:100vw;
      height: 5em;
      display: flex
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin: 6px 0;
      cursor: pointer;
    }
  
    li:first-of-type {
      margin-top: 6px;
    }
    li:last-child {
      margin-bottom: 6px;
    }

  }`

  // transform: translate3d(${props => {
  //   switch (props.fadeIn) {
  //     case 'left':
  //       return '200%, 0 , 0'
  //     case 'bottom':
  //       return '0, -100%, 0'
  //     case 'top':
  //       return '0, 200%, 0'
  //     case 'right':
  //     default:
  //       return '-100%, 0, 0'
  //   }
  // } })

export default StyledResponsiveMenu;