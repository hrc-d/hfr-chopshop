import { connect } from 'react-redux';
import CostBenefitPlot from '../components/CostBenefitPlot';
import { selectCompCar, deselectCompCar } from '../actions/compCarConfig';

//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    testedCars: state.testedCars,
    histCars: state.histCars //cars that have been pre-loaded
  }

}

function mapDispatchToProps(dispatch,state){
  return {
    handleSelectCompCar: (e,type,index)=>{
      dispatch(selectCompCar(type,index));
    },
    handleClearCompCar: (e)=>{
      dispatch(deselectCompCar());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CostBenefitPlot);
