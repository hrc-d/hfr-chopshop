import React, { Component } from 'react';
import { clockwiseSort } from '../util/polygons';
export const transform = (coords,xOffset,yOffset,scale=1.0,rotation=90)=>{
  return coords.map(v=>[parseInt(scale*(v[0])+xOffset), parseInt(scale*(v[1])+yOffset)])
}

export const invtransform = (coords,xOffset,yOffset,scale=2.0,rotation=90)=>{
  return coords.map(v=>[parseInt((v[0]-xOffset)*(1.0/scale)),parseInt((v[1]-yOffset)*(1.0/scale))])
}
class CarSVG extends Component{

  wheelattrs2Coords(wheel_r, wheel_w, wheel_pos){
    return [[wheel_pos[0]-wheel_w/2, wheel_pos[1]+wheel_r],[wheel_pos[0]+wheel_w/2, wheel_pos[1]+wheel_r],
      [wheel_pos[0]-wheel_w/2, wheel_pos[1]-wheel_r],[wheel_pos[0]+wheel_w/2, wheel_pos[1]-wheel_r]]
  }
  coords2SVG(coords,fill,density=2.0,xOffset=275,yOffset=200,scale=2.0){
    let offsetCoords = transform(coords,xOffset,yOffset,scale);
    let sortedCoords = clockwiseSort(offsetCoords);
    let pathStr = "M "+sortedCoords[0][0]+" "+sortedCoords[0][1];
    for (let c=1; c<sortedCoords.length; c++){
      pathStr += " L "+sortedCoords[c][0]+" "+sortedCoords[c][1];
    }
    //close the path
    pathStr += " L "+sortedCoords[0][0]+" "+sortedCoords[0][1];

    return <path d={pathStr} fill={fill} stroke="none" fillOpacity={parseFloat(density)/1.0}/>
  }
  componentDidUpdate(prevProps) {
      if (this.props.carWidth !== prevProps.carWidth) {
          this.widthChanged = true;
          setTimeout(() => {this.forceUpdate()}, 1 * 1000);
      } else {
          this.widthChanged = false;
      }

      if (this.props.carLength !== prevProps.carLength) {
          this.lengthChanged = true;
          setTimeout(() => {this.forceUpdate()}, 1 * 1000);
      } else {
          this.lengthChanged = false;
      }
  }
  render() {
    let bumper = this.props.config ? this.props.config.hull_poly1 : undefined;
    let hull1 = this.props.config ? this.props.config.hull_poly2 : undefined;
    let hull2 = this.props.config ? this.props.config.hull_poly3 : undefined;
    let spoiler = this.props.config ? this.props.config.hull_poly4 : undefined;
    let wheels = this.props.config ? this.props.config.wheel_pos : undefined;
    let wheel_coords = wheels ? wheels.map(w => this.wheelattrs2Coords(this.props.config.wheel_rad, this.props.config.wheel_width, w)) : [];
    let xOffset = this.props.width ? this.props.width/2 : undefined;
    let yOffset = this.props.height ? this.props.height/2 : undefined;
    let carLength = this.props.carLength;
    let carWidth = this.props.carWidth;
    let bumperCoords = bumper ? clockwiseSort(transform(bumper,0,yOffset+30,2.0)) : undefined;
    let hull1Coords = hull1 ? clockwiseSort(transform(hull1,xOffset+175,0,2.0)) : undefined;
    let SVGResult;

    let wheelPairs = [];
    if(wheels){
      let maxWheelPosY = wheels.reduce((a,w)=>Math.max(a,w[1]),0);
      let minWheelPosY = wheels.reduce((a,w)=>Math.min(a,w[1]),maxWheelPosY);
      let frontPair = wheels.filter(w=>w[1]===minWheelPosY); //not sure how to initialize min, just did a big number
      let rearPair = wheels.filter(w=>w[1]===maxWheelPosY);
      wheelPairs = [frontPair,rearPair].map((pair)=>transform(pair,xOffset,yOffset,2.0));
    }

    if (this.widthChanged && this.lengthChanged) {
      SVGResult = (
         <React.Fragment>
           //axles
           {wheels && <line x1={wheelPairs[0][0][0]+this.props.config.wheel_width/2} y1={wheelPairs[0][0][1]}
                       x2={wheelPairs[0][1][0]-this.props.config.wheel_width/2} y2={wheelPairs[0][1][1]}
                       strokeWidth={5} stroke={this.props.wheelColor}/>}
           {wheels && <line x1={wheelPairs[1][0][0]+this.props.config.wheel_width/2} y1={wheelPairs[1][0][1]}
                       x2={wheelPairs[1][1][0]-this.props.config.wheel_width/2} y2={wheelPairs[1][1][1]}
                       strokeWidth={5} stroke={this.props.wheelColor}/>}
           {bumper && this.coords2SVG(bumper,this.props.hullColor,this.props.config.hull_densities[0],xOffset,yOffset)}
           {hull1 && this.coords2SVG(hull1,this.props.hullColor,this.props.config.hull_densities[1],xOffset,yOffset)}
           {hull2 && this.coords2SVG(hull2,this.props.hullColor,this.props.config.hull_densities[2],xOffset,yOffset)}
           {spoiler && this.coords2SVG(spoiler,this.props.hullColor,this.props.config.hull_densities[3],xOffset,yOffset)}
           {wheel_coords.map(w=>this.coords2SVG(w,this.props.wheelColor,0.6+(0.25*this.props.config.friction_lim/1e4),xOffset,yOffset))}

           //ADDING MEASUREMENTS

           //FILTER FOR TEXT SHADOW
           <filter id="shadow" width="200%" height="200%">
               <feGaussianBlur stdDeviation="3 3" result="shadow"/>
           </filter>

           //LENGTH
           {hull1 && <text x={hull1Coords[1][0] - 75} y={yOffset} fill="black" style={{filter: `url(#shadow)`}}>{carLength} m</text>} //SHADOW OF LENGTH TEXT
           {hull1 && <text x={hull1Coords[1][0] - 75} y={yOffset} fill="yellow">{carLength} m</text>} //ACTUAL LENGTH TEXT

           //WIDTH
           {bumper && <text x={xOffset-20} y={bumperCoords[0][1]} fill="black" style={{filter: `url(#shadow)`}}>{carWidth} m</text>} //SHADOW OF WIDTH TEXT
           {bumper && <text x={xOffset-20} y={bumperCoords[0][1]} fill="yellow">{carWidth} m</text>} //ACTUAL WIDTH TEXT
         </React.Fragment>
     )
 } else if (this.lengthChanged) {
     SVGResult = (
        <React.Fragment>
          //axles
          {wheels && <line x1={wheelPairs[0][0][0]+this.props.config.wheel_width/2} y1={wheelPairs[0][0][1]}
                      x2={wheelPairs[0][1][0]-this.props.config.wheel_width/2} y2={wheelPairs[0][1][1]}
                      strokeWidth={5} stroke={this.props.wheelColor}/>}
          {wheels && <line x1={wheelPairs[1][0][0]+this.props.config.wheel_width/2} y1={wheelPairs[1][0][1]}
                      x2={wheelPairs[1][1][0]-this.props.config.wheel_width/2} y2={wheelPairs[1][1][1]}
                      strokeWidth={5} stroke={this.props.wheelColor}/>}
          {bumper && this.coords2SVG(bumper,this.props.hullColor,this.props.config.hull_densities[0],xOffset,yOffset)}
          {hull1 && this.coords2SVG(hull1,this.props.hullColor,this.props.config.hull_densities[1],xOffset,yOffset)}
          {hull2 && this.coords2SVG(hull2,this.props.hullColor,this.props.config.hull_densities[2],xOffset,yOffset)}
          {spoiler && this.coords2SVG(spoiler,this.props.hullColor,this.props.config.hull_densities[3],xOffset,yOffset)}
          {wheel_coords.map(w=>this.coords2SVG(w,this.props.wheelColor,0.6+(0.25*this.props.config.friction_lim/1e4),xOffset,yOffset))}

          //ADDING MEASUREMENTS

          //FILTER FOR TEXT SHADOW
          <filter id="shadow" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3 3" result="shadow"/>
          </filter>

          //LENGTH
          {hull1 && <text x={hull1Coords[1][0] - 75} y={yOffset} fill="black" style={{filter: `url(#shadow)`}}>{carLength} m</text>} //SHADOW OF LENGTH TEXT
          {hull1 && <text x={hull1Coords[1][0] - 75} y={yOffset} fill="yellow">{carLength} m</text>} //ACTUAL LENGTH TEXT

          //WIDTH
          {bumper && <text x={xOffset-20} y={bumperCoords[0][1]} fill="black">{carWidth} m</text>}
    
        </React.Fragment>
    )
 } else if (this.widthChanged) {
     SVGResult = (
        <React.Fragment>
          //axles
          {wheels && <line x1={wheelPairs[0][0][0]+this.props.config.wheel_width/2} y1={wheelPairs[0][0][1]}
                      x2={wheelPairs[0][1][0]-this.props.config.wheel_width/2} y2={wheelPairs[0][1][1]}
                      strokeWidth={5} stroke={this.props.wheelColor}/>}
          {wheels && <line x1={wheelPairs[1][0][0]+this.props.config.wheel_width/2} y1={wheelPairs[1][0][1]}
                      x2={wheelPairs[1][1][0]-this.props.config.wheel_width/2} y2={wheelPairs[1][1][1]}
                      strokeWidth={5} stroke={this.props.wheelColor}/>}
          {bumper && this.coords2SVG(bumper,this.props.hullColor,this.props.config.hull_densities[0],xOffset,yOffset)}
          {hull1 && this.coords2SVG(hull1,this.props.hullColor,this.props.config.hull_densities[1],xOffset,yOffset)}
          {hull2 && this.coords2SVG(hull2,this.props.hullColor,this.props.config.hull_densities[2],xOffset,yOffset)}
          {spoiler && this.coords2SVG(spoiler,this.props.hullColor,this.props.config.hull_densities[3],xOffset,yOffset)}
          {wheel_coords.map(w=>this.coords2SVG(w,this.props.wheelColor,0.6+(0.25*this.props.config.friction_lim/1e4),xOffset,yOffset))}

          //ADDING MEASUREMENTS

          //FILTER FOR TEXT SHADOW
          <filter id="shadow" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3 3" result="shadow"/>
          </filter>

          //LENGTH
          {hull1 && <text x={hull1Coords[1][0] - 75} y={yOffset} fill="black">{carLength} m</text>}

          //WIDTH
          {bumper && <text x={xOffset-20} y={bumperCoords[0][1]} fill="black" style={{filter: `url(#shadow)`}}>{carWidth} m</text>} //SHADOW OF WIDTH TEXT
          {bumper && <text x={xOffset-20} y={bumperCoords[0][1]} fill="yellow">{carWidth} m</text>} //ACTUAL WIDTH TEXT
        </React.Fragment>
     )
 } else {
        SVGResult = (
           <React.Fragment>
             //axles
             {wheels && <line x1={wheelPairs[0][0][0]+this.props.config.wheel_width/2} y1={wheelPairs[0][0][1]}
                         x2={wheelPairs[0][1][0]-this.props.config.wheel_width/2} y2={wheelPairs[0][1][1]}
                         strokeWidth={5} stroke={this.props.wheelColor}/>}
             {wheels && <line x1={wheelPairs[1][0][0]+this.props.config.wheel_width/2} y1={wheelPairs[1][0][1]}
                         x2={wheelPairs[1][1][0]-this.props.config.wheel_width/2} y2={wheelPairs[1][1][1]}
                         strokeWidth={5} stroke={this.props.wheelColor}/>}
             {bumper && this.coords2SVG(bumper,this.props.hullColor,this.props.config.hull_densities[0],xOffset,yOffset)}
             {hull1 && this.coords2SVG(hull1,this.props.hullColor,this.props.config.hull_densities[1],xOffset,yOffset)}
             {hull2 && this.coords2SVG(hull2,this.props.hullColor,this.props.config.hull_densities[2],xOffset,yOffset)}
             {spoiler && this.coords2SVG(spoiler,this.props.hullColor,this.props.config.hull_densities[3],xOffset,yOffset)}
             {wheel_coords.map(w=>this.coords2SVG(w,this.props.wheelColor,0.6+(0.25*this.props.config.friction_lim/1e4),xOffset,yOffset))}

             //ADDING MEASUREMENTS

             //LENGTH
             {hull1 && <text x={hull1Coords[1][0] - 75} y={yOffset} fill="black">{carLength} m</text>}

             //WIDTH
             {bumper && <text x={xOffset-20} y={bumperCoords[0][1]} fill="black">{carWidth} m</text>}
           </React.Fragment>
       )
    }

    return SVGResult
  }
}


export default CarSVG;
