import { connect } from 'react-redux';
import CarSVG from '../components/CarSVG';
import { calculateCarLength, calculateCarWidth } from '../util/carActions'
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';

function mapStateToProps(state) {
  return {
    config: state.compCarConfig ? {...state.compCarConfig.config, "hull_densities":[0.3,0.3,0.3,0.3], "friction_lim":100} : {},
    height: state.dimensions.workspaceHeight,
    width: state.dimensions.workspaceWidth,
    hullColor: "black",
    wheelColor: "black",
    carLength: (calculateCarLength(state.carConfig)*.0254).toFixed(2),
    carWidth: (calculateCarWidth(state.carConfig)*.0254).toFixed(2)
  }

}

export default connect(mapStateToProps)(CarSVG);
