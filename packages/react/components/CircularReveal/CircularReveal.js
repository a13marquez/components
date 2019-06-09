import React from 'react';
import StyledCircularReveal from './StyledCircularReveal';
import PropTypes from 'prop-types';

export class CircularReveal extends React.Component {
  constructor(props){
    super(props);
    this.elementRef = React.createRef();
    this.innerRef = React.createRef();
    this.easing = props.easing || 0.1;
    this.outScale = 0.6;
    this.inScale = 1;
    this.targetScale = this.outScale;
    this.elementScale = this.targetScale;
    this.innerScale = 1 / this.elementScale;
    this.onPointerOver = this.onPointerOver.bind(this);
    this.onPointerOut = this.onPointerOut.bind(this);
    this.update = this.update.bind(this);
    this.state = {pointer:'out'}
  }

  componentDidMount() {
    requestAnimationFrame(this.update);
  }

  update(){
    this.elementScale += (this.targetScale - this.elementScale) * this.easing;
    this.innerScale = 1 / this.elementScale;

    this.elementRef.current.style.transform = `scale(${this.elementScale})`;
    this.innerRef.current.style.transform = `scale(${this.innerScale})`;
    requestAnimationFrame(this.update)
  }

  onPointerOver() {
    this.targetScale = this.inScale;
    requestAnimationFrame(this.update)    
  }

  onPointerOut() {
    this.targetScale = this.outScale;
    requestAnimationFrame(this.update)    

  }

  render() {
   return (<StyledCircularReveal
      ref={this.elementRef}
      width={this.props.width}
      height={this.props.heigh}
      content={this.props.content}
      background={this.props.background}
      alignItems={this.props.alignItems}
      justifyContent={this.props.justifyContent}
      fontSize={this.props.fontSize}
      transition={this.props.transition}
      onPointerOver={this.onPointerOver}
      onPointerOut={this.onPointerOut}>
        <div 
          ref={this.innerRef}
          className="circularReveal__content">
          <img 
          src={this.props.src}
          alt={this.props.alt}>
          </img>
        </div>
      </StyledCircularReveal>)
  }
}

CircularReveal.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  content: PropTypes.string,
  background: PropTypes.string,  
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  fontSize: PropTypes.string,
  transition: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
