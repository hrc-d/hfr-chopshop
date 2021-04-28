import {setTab,TAB_BOTTOM, TEST_DRIVE_TAB} from './tabs';
import {setSession} from './auth';

export const SET_TEST_DRIVE_VIDEO = 'SET_TEST_DRIVE_VIDEO';
export const INIT_TEST_DRIVE = 'INIT_TEST_DRIVE';
export const ADD_TESTED_CAR = 'ADD_TESTED_CAR';
export const SET_NUM_EPISODES = 'SET_NUM_EPISODES';
export const INCREMENT_TEST_DRIVE_VIDEO_COUNTER = 'INCREMENT_TEST_DRIVE_VIDEO_COUNTER';
export const DECREMENT_TEST_DRIVE_VIDEO_COUNTER = 'DECREMENT_TEST_DRIVE_VIDEO_COUNTER';

export const initTestDrive = (config) =>{
  return {
    type: INIT_TEST_DRIVE,
    value: config
  }
};

export const setTestDriveVideo = (video) =>{
	return {
		type: SET_TEST_DRIVE_VIDEO,
    value: video
	};
};

export const addTestedCar = (config,result,video) =>{
  return {
    type: ADD_TESTED_CAR,
    value: {config: config, result:result, video:video}
  }
};


const callTestDrive = (userId,carConfig,apiUrl,numEpisodes) =>{
  let queryOptions = {
    method: "POST",
    mode: "cors",
    cache: 'no-cache',
    headers: {"content-type": "application/json"},
    body: JSON.stringify({'config':carConfig, 'numEpisodes':numEpisodes, 'userId': userId})
  }
  let requestUri = apiUrl + "testdrive";
  return dispatch => {
    dispatch(setTab(TAB_BOTTOM,TEST_DRIVE_TAB));
    dispatch(initTestDrive(carConfig)); //signal that you're initiating test drive
    return fetch(requestUri,queryOptions)
    .then(response => {
      let responseObj = response.json();
      return responseObj;
    })
    .then(json => {

      dispatch(setTestDriveVideo(json.session.tested_videos[json.session.tested_videos.length-1])); //set the video
      dispatch(addTestedCar(carConfig,json.session.tested_results[json.session.tested_results.length-1],json.session.tested_videos[json.session.tested_videos.length-1])); //add the results
      dispatch(setSession(json.session));
      
    });
  };
};

const callSubmitDesign = (userId,carConfig,questions,features,apiUrl) =>{
  let queryOptions = {
    method: "POST",
    mode: "cors",
    cache: 'no-cache',
    headers: {"content-type": "application/json"},
    body: JSON.stringify({'config':carConfig, 'userId':userId, 'questions': questions, 'selectedFeatures': features})
  }
  let requestUri = apiUrl + "submitdesign";
  return dispatch => {
    return fetch(requestUri,queryOptions)
    .then(response => {
      let responseObj = response.json();
      return responseObj;
    })
    .then(json => {
      if(json.success===true){
        window.location =apiUrl+"success";
      }
      else{
        console.log(json);
        alert("There was a problem with your submission: "+json.error);
      }
      
    })
  }
}





export const testDrive = (carConfig = {}, train=true) =>{
  let numEpisodes = 0;
  
  return (dispatch, getState) => {
    if(train===true){
      numEpisodes = getState().numEpisodes
    }
    let state = getState();
    return dispatch(callTestDrive(state.userId,state.carConfig, state.carRacingApiUrl,numEpisodes));
  }
};

export const submitDesign = (carConfig = {}) =>{
  return (dispatch, getState) =>{
    let state = getState();
    return dispatch(callSubmitDesign(state.userId,state.carConfig, state.questions, state.selectedFeatures, state.carRacingApiUrl));
  }
}

export const setNumEpisodes = (value) =>{
  return {
    type: SET_NUM_EPISODES,
    value: value
  };
}

export const incrementTestDriveVideoCounter = () =>{
  return {
    type: INCREMENT_TEST_DRIVE_VIDEO_COUNTER
  }
}

export const decrementTestDriveVideoCounter = () =>{
  return {
    type: DECREMENT_TEST_DRIVE_VIDEO_COUNTER
  }
}