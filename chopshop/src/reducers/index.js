import { combineReducers } from 'redux';
import dimensions from './dimensions';
import carConfig from './carConfig';
import compCarConfig from './compCarConfig';
import testedCars from './testedCars';
import loading from './loading';
import tabs from './tabs';
import numEpisodes from './testParams';
import questions from './questions';
import selectedFeatures from './selectedFeatures';
import {session, userId} from './auth';
import {carRacingUrl,carRacingStaticUrl,carRacingApiUrl,testDriveVideo, testDriveVideoArray, testDriveVideoCounter, statsPlotPath} from './paths';
const chopShopReducer = combineReducers({
	dimensions,
  carConfig,
  compCarConfig,
  carRacingUrl,
  carRacingStaticUrl,
  carRacingApiUrl,
  testDriveVideo,
  testDriveVideoArray,
  testDriveVideoCounter,
  statsPlotPath,
  testedCars,
  loading,
  numEpisodes,
  tabs,
  session,
  userId,
  questions,
  selectedFeatures
});

export default chopShopReducer;
