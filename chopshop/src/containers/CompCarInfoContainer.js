import { connect } from 'react-redux';
import CarInfoCompact from '../components/CarInfoCompact';

function mapStateToProps(state) {
  return {
    state: state,
    config: state.compCarConfig ? state.compCarConfig.config : {},
    readOnly: true
  }
}


export default connect(mapStateToProps)(CarInfoCompact);
