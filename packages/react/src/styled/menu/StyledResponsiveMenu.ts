import styled from 'styled-components';

interface StyledResponsiveMenuProps {
  readonly fontSize?: string;
  readonly color?: string;
  readonly backgroundColor?: string;
}

const StyledResponsiveMenu = styled.nav<StyledResponsiveMenuProps>`
  .burguer__icon {
    display:none; 
  }
  ul {
    list-style: none;
    font-size: ${props => props.fontSize || '14px'};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-right: 2rem;
  }

  li {
    margin: 0 1rem;
    text-decoration: none;
    opacity: .6;
    padding: 1rem 2rem;
  }

  li a {
    color: ${props => props.color || 'white' };
    font-size: 2.2rem;
    font-weight: 600;
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

  @media (min-width:  28.75em) {
    background-color: ${
    props => props.backgroundColor || 'rgb(0, 0, 0, .7)'}; 
  }

  @media (max-width:  28.75em) {
    height: 100%;
    z-index:0;
    
    .burguer__icon {
      display:inline;
      z-index: 10;
    }

    .rm__list {
      height:100vh;
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
        width: 115%;
        list-style:none;
        margin:0;
        padding:0;
        overflow: auto;
        transition: all 0.5s;
        z-index: 10; 
        MozTransform: translate3d(-10%, 0, 0);
        MsTransform: translate3d(-10%, 0, 0);
        OTransform: translate3d(-10%, 0, 0);
        WebkitTransform: translate3d(-10%, 0, 0);
        transform: translate3d(-10%, 0, 0);  
      }
      ul {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      
      li {
        width:100vw;
        height: 5em;
        display: flex;
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

    }
  }
`;

  export default StyledResponsiveMenu

