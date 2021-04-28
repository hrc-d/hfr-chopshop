import { connect } from 'react-redux';
import { setTab } from '../actions/tabs';
import Viewspace from '../components/Viewspace';
function mapStateToProps(state){
	return {
		height: state.dimensions.workspaceHeight,
		width: state.dimensions.workspaceWidth,
        tabValueTop: state.tabs? state.tabs.top : 0,
        tabValueBottom: state.tabs? state.tabs.bottom : 0
	}

}
function mapDispatchToProps(dispatch){
  return {
    handleSwitchTab: (e,tabbedView,value)=>{
      return dispatch(setTab(tabbedView,value));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Viewspace)
