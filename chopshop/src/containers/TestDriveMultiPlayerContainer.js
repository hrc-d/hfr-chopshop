import { connect } from 'react-redux';
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
import TestDrivePlayer from '../components/TestDrivePlayer'; 
function mapStateToProps(state) {
  return {
    url: state.carRacingStaticUrl,
    path: state.session.initial_test_drives,
    counter: state.testDriveVideoCounter,
    loading: state.loading.indexOf("testDrive") >= 0
  }

}

export default connect(mapStateToProps)(TestDrivePlayer);
