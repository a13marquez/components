import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color:rgba(0, 0, 0, .7);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width:  100%;
  color: #fff;
  padding: 35px 100px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
    cursor: pointer;
    color: white;
    opacity: .6;
  }
  a:hover {
    opacity: 1;
  }
  nav ul {
    list-style: none
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  nav li {
    margin: 0 6px;
  }
  
  nav li:first-child {
    margin-left: 0;
  }
  
  nav li:last-child {
    margin-right: 0;
  }`;

  export default StyledHeader;