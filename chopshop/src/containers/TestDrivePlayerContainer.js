import { connect } from 'react-redux';
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
import TestDrivePlayer from '../components/TestDrivePlayer'; 
function mapStateToProps(state) {
  return {
    path: state.testDriveVideo &&  state.carRacingStaticUrl+state.testDriveVideo,
    loading: state.loading.indexOf("testDrive") >= 0
  }

}

export default connect(mapStateToProps)(TestDrivePlayer);
