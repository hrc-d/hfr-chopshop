import { connect } from 'react-redux';
import VideoModal from '../components/VideoModal';
import { setTab, VIDEO_MODAL, HELP_VIEW} from '../actions/tabs';
import {incrementTestDriveVideoCounter, decrementTestDriveVideoCounter} from '../actions/testDrive';

function mapStateToProps(state) {
  return { modal_state : state.tabs ? state.tabs.video_modal : true,
            counter: state.testDriveVideoCounter,
            stats_plot: state.session ? state.session.reward_plot : undefined,
            helpView: state.tabs ? state.tabs.helpView : false,
            questions: state.questions ? state.questions : {},
            static_url: state.carRacingStaticUrl,
            api_url: state.carRacingApiUrl,
            numTestDrives: (state.session && state.session.initial_test_drives) ? state.session.initial_test_drives.length : 0
        };
}

function mapDispatchToProps(dispatch){
    return {
      handleOpen: (e)=>{
        return dispatch(setTab(VIDEO_MODAL,true));
      },
      handleClose: (e)=>{
          return dispatch(setTab(VIDEO_MODAL,false));
      },
      handleHelp: (toggle)=>{
          return dispatch(setTab(HELP_VIEW,toggle))
      },
      handleForward: (e)=>{
          return dispatch(incrementTestDriveVideoCounter());
      },
      handleBack: (e)=>{
          return dispatch(decrementTestDriveVideoCounter());
      },
      handleSubmit: (e)=>{
          e.preventDefault();
          let answers = {};
          for(let i=0; i<e.target.length; i++){
              answers[e.target[i].name] = e.target[i].value;
          }
          dispatch({type:"SET_QUESTIONS", value:answers});
        return dispatch(setTab(VIDEO_MODAL,false));
      }
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(VideoModal);
