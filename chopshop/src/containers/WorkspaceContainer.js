import { connect } from 'react-redux';
import Workspace from '../components/Workspace';
import { testDrive, setNumEpisodes, submitDesign } from '../actions/testDrive';
import {setTab,VIDEO_MODAL,SUBMIT_FORM,TAB_TOP,TUNING_TAB} from '../actions/tabs';

import {setConfigFocus} from '../actions/tabs';

function mapStateToProps(state){
	return {
		height: state.dimensions.workspaceHeight,
		width: state.dimensions.workspaceWidth,
    carConfig: state.carConfig,
    numEpisodes: state.numEpisodes,
    submitFormOpen: state.tabs.submitForm,
    questions: state.questions ? state.questions: {},
    loading: state.loading.indexOf('testDrive') >= 0,
    currentFocus: state.tabs.config_focus,
    selectedFeatures: state.selectedFeatures
	}

}
function mapDispatchToProps(dispatch){
  return {
    handleNumEpisodes: (e)=>{
      dispatch(setNumEpisodes(e.target.value));
    },
    handleTestDrive: (e)=>{
      dispatch(testDrive({},false));
    },
    handleTrainDriver: (e)=>{
      dispatch(testDrive({},true));
    },
    handlePreSubmit: (e)=>{
      dispatch(setTab(SUBMIT_FORM,true));
    },
    handleCancelSubmit: (e)=>{
      e.preventDefault();
          let answers = {};
          for(let i=0; i<e.target.length; i++){
              answers[e.target[i].name] = e.target[i].value;
          }
      dispatch({type:"SET_QUESTIONS", value:answers});
      dispatch(setTab(SUBMIT_FORM,false));
    },
    handleSubmitDesign: (e)=>{
      e.preventDefault();
          let answers = {};
          for(let i=0; i<e.target.length; i++){
              answers[e.target[i].name] = e.target[i].value;
          }
      dispatch({type:"SET_QUESTIONS", value:answers});
      dispatch(submitDesign({}));
    },
    handleChangeFeatures: (e)=>{
      console.log(e.target.name);
      console.log(e.target.checked);
      let feature_toggle = {}
      feature_toggle[e.target.name] = e.target.checked;
      dispatch({type:"SET_SELECTED_FEATURES",value:feature_toggle})
    },
    handleOpenModal: (e)=>{
      dispatch(setTab(VIDEO_MODAL,true));
    },
    handleSwitchConfigFocus: (feature)=>{
      dispatch(setConfigFocus(feature));
      dispatch(setTab(TAB_TOP,TUNING_TAB));
    }
  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Workspace)
