import React, { Component } from 'react';

class Vertex extends Component{

  //Enables this.state to be updated when props is updated by PartsBin
  //static getDerivedStateFromProps(nextProps, prevState) {
  //  if (prevState.x === nextProps.x && prevState.y === nextProps.y)
  //    return null;
  //  return {...prevState, ...nextProps, x_i : nextProps.x, y_i : nextProps.y};
  //}
 stroke = 1;
  fill = "white";
  handleMouseDown = (e) => {
    e.preventDefault();
    // console.log("mousedown");
    this.coords = {
      x: e.pageX,
      y: e.pageY
    }
    this.stroke=3;
    this.fill="yellow";
    e.target.parentNode.parentNode.appendChild(e.target.parentNode);
    document.addEventListener('mousemove', this.handleMouseMove);
  };
  
  handleMouseUp = (e) => {
    e.preventDefault();
    // console.log("MOUSE UP! here");
    this.stroke=1;
    this.fill="white";
    document.removeEventListener('mousemove', this.handleMouseMove);
    //if (this.isInPit()) {
    //  this.props.handleDrop(e);
    //}
    this.coords = {};
    //this.setState({
    // x: this.state.x_i,
    // y: this.state.y_i
   // });
  };
  
  handleMouseMove = (e) => {
    e.preventDefault();
    // console.log("moving!!!!!!!!!!!!!!!!!!!!!!");
    const xDiff = this.coords.x - e.pageX;
    const yDiff = 0;
    // const yDiff = this.coords.y - e.pageY;
  //ignoring x to constrain motion to the y direction
    this.coords.x = e.pageX;
    //this.coords.y = e.pageY;

    //this.setState({
    //  x: this.state.x - xDiff,
    //  y: this.state.y - yDiff
    //});
    this.props.handleMove(e,this.props.x-xDiff,this.props.y-yDiff,this.props.xOffset,this.props.yOffset,this.props.scale);

    this.handleOutOfBounds(e);

  };


  isInPit = () => {
    if (this.state.y < this.props.y_max/2)
      return true;
    return false;
  }

  handleOutOfBounds = (e) => {
    //rightBound
    if (e.pageX + this.props.r > this.props.x_max) {
      this.props.handleMove(e,this.props.x,this.props.y,this.props.xOffset,this.props.yOffset,this.props.scale)
      this.handleMouseUp(e);
    }

    //leftBound
    if (this.props.x - this.props.r < this.props.x_min) {
      this.props.handleMove(e,this.props.x,this.props.y,this.props.xOffset,this.props.yOffset,this.props.scale)
      this.handleMouseUp(e);
    }

    //upBound
    if (this.props.y < 0) {
      this.props.handleMove(e,this.props.x,0,this.props.xOffset,this.props.yOffset,this.props.scale);
      this.handleMouseUp(e);
    }

    //downBound
    if (this.props.y + this.props.r > this.props.y_max) {
      this.props.handleMove(e,this.props.x,this.props.y_max,this.props.xOffset,this.props.yOffset,this.props.scale);
      this.handleMouseUp(e);
    }
  }

  render() {
    // console.log("stroke is ",this.stroke);
    // console.log("fill is ",this.fill);
    return (
      <React.Fragment>
      <g> 
        <circle
          className="vertex"
          cx={this.props.x}
          cy={this.props.y}
          r={this.props.r}
          stroke="black"
          strokeWidth={this.stroke}
          fill={this.fill}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onDragStart={()=>false}
          draggable={false}
        />
      </g>
      </React.Fragment>
      )
  }
}


export default Vertex;
