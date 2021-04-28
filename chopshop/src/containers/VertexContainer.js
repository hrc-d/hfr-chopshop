import { connect } from 'react-redux';
import Vertex from '../components/Vertex';
import { setConfigVar, HULL_VERTEX } from '../actions/carConfig';
import { transform, invtransform } from '../components/CarSVG';

function mapStateToProps(state, ownProps) {
  // console.log("ownProps",ownProps);
  // console.log("carConfig",state.carConfig);
  let xOffset = state.dimensions.workspaceWidth/2;
  let yOffset = state.dimensions.workspaceHeight/2;
  let scale = 2.0;
  let left_bound = document.getElementById("workspace") ? document.getElementById("workspace").getBoundingClientRect().left : 0;
  // console.log("untransformed coords",state.carConfig[ownProps.polygon][ownProps.index])
  let transformedCoords = transform([state.carConfig[ownProps.polygon][ownProps.index]],xOffset,yOffset,scale);
  // console.log("transformed coords",transformedCoords);
  return {
    x_min : left_bound,
    x_max : state.dimensions ? state.dimensions.workspaceWidth + left_bound: 0,
    y_max : state.dimensions ? state.dimensions.workspaceHeight : 0,
    x : transformedCoords[0][0],
    y : transformedCoords[0][1],
    r : 5,
    xOffset: xOffset,
    yOffset: yOffset,
    scale: scale
  }

}

function mapDispatchToProps(dispatch,ownProps) {

  return { 
    handleMove : (e,x,y,xOffset,yOffset,scale) => {
                              // console.log("itransform this: ",x,y);
                              let iCoords = invtransform([[x,y]],xOffset,yOffset,scale);
                              // console.log("itransformed: ", iCoords[0])
                              dispatch(setConfigVar(HULL_VERTEX, {polygon:ownProps.polygon,index:ownProps.index,x:iCoords[0][0],y:iCoords[0][1]}))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps, null, {withRef:true})(Vertex);
