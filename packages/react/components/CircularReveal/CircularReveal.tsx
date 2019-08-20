import * as React from 'react';
import { StyledCircularReveal } from './StyledCircularReveal';

interface CircularRevealProps {
  readonly easing?: number
  readonly width?: string;
  readonly height?: string;
  readonly content?: string;
  readonly background?: string
  readonly alignItems?: string
  readonly justifyContent?: string;
  readonly fontSize?: string
  readonly transition?: string
  readonly src: string
  readonly alt: string
}

export class CircularReveal extends React.Component<CircularRevealProps> {
  elementRef: React.RefObject<HTMLDivElement>;
  innerRef: React.RefObject<HTMLDivElement>
  innerScale: number;
  easing: number;
  outScale: number;
  inScale: number;
  targetScale: number;
  elementScale: number;
  
  constructor(props: CircularRevealProps){
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

  update(): void{
    this.elementScale += (this.targetScale - this.elementScale) * this.easing;
    this.innerScale = 1 / this.elementScale;

    if(this.elementRef.current) {
      this.elementRef.current.style.transform = `scale(${this.elementScale})`;
    }
    if (this.innerRef.current) {
      this.innerRef.current.style.transform = `scale(${this.innerScale})`;
    }
    requestAnimationFrame(this.update)
  }

  onPointerOver(): void {
    this.targetScale = this.inScale;
    requestAnimationFrame(this.update)    
  }

  onPointerOut(): void {
    this.targetScale = this.outScale;
    requestAnimationFrame(this.update)    

  }

  render() {
   return (<StyledCircularReveal
      ref={this.elementRef}
      width={this.props.width}
      height={this.props.height}
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
};