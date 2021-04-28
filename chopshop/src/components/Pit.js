import React, { Component } from 'react';
import UserCarContainer from '../containers/UserCarContainer';
import VertexContainer from '../containers/VertexContainer';
import CompCarContainer from '../containers/CompCarContainer';
import {blue} from '@material-ui/core/colors';

class Pit extends Component{
  constructor(props) {
     super(props);
    this.vertexRefs = [];
    this.numPolyhulls = 4;
    this.polyhulls = [];
    for(let i=0; i<this.numPolyhulls;i++){
      this.polyhulls.push(this.props.config['hull_poly'+String(i+1)]);
    }
    for(let i=0; i<this.polyhulls.length; i++){
      for(let j=0; j<this.polyhulls[i].length; j++){
        this.vertexRefs.push(React.createRef());
      }
    }
   }

  render () {
    //grid
    let w = this.props.width ? this.props.width : 600;
    let h = this.props.height ? this.props.height : 400;

    let bl = 0.15*Math.min(w,h);
    let tlbX = 0.05*w;
    let tlbY =  0.05*h;
    let tlbPoints = [tlbX,tlbY+bl,tlbX,tlbY,tlbX+bl,tlbY]

    let trbX = 0.95*w;
    let trbY = 0.05*h;
    let trbPoints = [trbX-bl,trbY,trbX,trbY,trbX,trbY+bl]

    let blbX = 0.05*w;
    let blbY =  0.95*h;
    let blbPoints = [blbX,blbY-bl,blbX,blbY,blbX+bl,blbY]

    let brbX = 0.95*w;
    let brbY = 0.95*h;
    let brbPoints = [brbX,brbY-bl,brbX,brbY,brbX-bl,brbY]
    let smallBlockHeight = 33;
    let smallBlockWidth = smallBlockHeight;
    let bigBlockHeight = 99;
    let bigBlockWidth = bigBlockHeight;




	return <React.Fragment>
          // ADDING BACKGROUND GRID
          <defs>
              // DEFINITIONS FOR THE DIFFERENT GRID SIZES
              <pattern id="smallGrid" width={smallBlockWidth} height={smallBlockHeight} patternUnits="userSpaceOnUse">
                  <path d={"M " + smallBlockWidth + " 0 L 0 0 0 " + smallBlockHeight} fill="none" stroke={blue[300]} stroke-width="0.5"/>
              </pattern>

              <pattern id="grid" width={bigBlockWidth} height={bigBlockHeight} patternUnits="userSpaceOnUse">
                  <rect width={bigBlockWidth} height={bigBlockHeight} fill="url(#smallGrid)"/>
                  <path d={"M " + bigBlockWidth + " 0 L 0 0 0 " + bigBlockHeight} fill="none" stroke={blue[300]} stroke-width="3"/>
              </pattern>
          </defs>

          <rect fill="url(#grid)" width={w} height={h} />



          <polyline
            points={String(tlbPoints)}
            stroke="gold"
            strokeWidth={30}
            strokeLinejoin="bevel"
            fill="black"
          />
          <polyline
            points={String(trbPoints)}
            stroke="gold"
            strokeWidth={30}
            strokeLinejoin="bevel"
            fill="black"
          />
          <polyline
            points={String(blbPoints)}
            stroke="gold"
            strokeWidth={30}
            strokeLinejoin="bevel"
            fill="black"
          />
          <polyline
            points={String(brbPoints)}
            stroke="gold"
            strokeWidth={30}
            strokeLinejoin="bevel"
            fill="black"
          />
          <UserCarContainer />
          <CompCarContainer />
          {this.polyhulls.map((p,i)=>p.map((v,j)=>{
            return <VertexContainer
            ref={this.vertexRefs[j+this.polyhulls.slice(0,i).reduce((a,p)=>a+p.length,0)]} //indexing over jagged array
            polygon={"hull_poly"+String(i+1)}
            index={j} />
          }))}
    </React.Fragment>
}
}
export default Pit;
