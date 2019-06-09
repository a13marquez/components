import styled from 'styled-components';

const defaultTransformTransition = 'transform 0.2s cubic-bezier(0, 0, 0.3, 1)';
const defaultOpacityTransition = 'opacity 0.2s cubic-bezier(0, 0, 0.3, 1)'

const StyledCircularReveal = styled.div`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  ::after {
    content: ${props => props.content ?  
        `'${props.content }'`:  
          "'CONTENT'"};
    position: absolute;
    background: ${props => props.background || 'rgba(116, 175, 215, 0.509)'};
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    color: ${props => props.color || '#FFF'};
    font-size: ${props => props.fontSize || '20px'};
    transition: ${props => props.transition || 
      defaultTransformTransition +  ', ' + defaultOpacityTransition };
    transform: rotate(10deg);
    opacity: 0;   
  }
  :hover::after {
    transform: rotate(0deg);
    opacity: 1;
  }
}
  
  img {
    width:100%;
  }`
  

export default StyledCircularReveal;