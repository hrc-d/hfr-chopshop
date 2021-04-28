export const COLOR = 'COLOR';
export const WHEEL_SIZE = 'WHEEL_SIZE';
export const BODY = 'BODY';
export const DRIVETRAIN = 'DRIVETRAIN';
export const ENGINE = 'ENGINE'
export const ENG_POWER = 'ENG_POWER';
export const WHEEL_RAD='WHEEL_RAD';
export const WHEEL_WIDTH='WHEEL_WIDTH';
export const FRICTION_LIM='FRICTION_LIM';
export const HULL_VERTEX='HULL_VERTEX';
export const FULL_CONFIG = 'FULL_CONFIG';
export const BRAKE_SCALAR = 'BRAKE_SCALAR';
export const STEERING_SCALAR = 'STEERING_SCALAR';
export const REAR_STEERING_SCALAR = 'REAR_STEERING_SCALAR';
export const MAX_SPEED = 'MAX_SPEED';

export const BUMPER = 'BUMPER';
export const SPOILER = 'SPOILER';
export const FRONT_BODY = 'FRONT_BODY';
export const REAR_BODY = 'REAR_BODY';

const SET_CAR_CONFIG = 'SET_CAR_CONFIG';
const SET_COLOR= 'SET_COLOR';
const SET_ENG_POWER = 'SET_ENG_POWER';
const SET_WHEEL_RAD = 'SET_WHEEL_RAD';
const SET_WHEEL_WIDTH='SET_WHEEL_WIDTH';
const SET_FRICTION_LIM='SET_FRICTION_LIM';
const SET_DRIVETRAIN = 'SET_DRIVETRAIN';
const CLEAR_COLOR = 'CLEAR_COLOR';
const CLEAR_WHEEL_SIZE = 'CLEAR_WHEEL_SIZE';
const CLEAR_BODY = 'CLEAR_BODY';
const CLEAR_DRIVETRAIN = 'CLEAR_DRIVETRAIN';
const CLEAR_ENGINE = 'CLEAR_ENGINE';
const SET_HULL_VERTEX = 'SET_HULL_VERTEX';
const SET_BRAKE_SCALAR = 'SET_BRAKE_SCALAR';
const SET_STEERING_SCALAR = 'SET_STEERING_SCALAR';
const SET_REAR_STEERING_SCALAR = 'SET_REAR_STEERING_SCALAR';
const SET_MAX_SPEED = 'SET_MAX_SPEED';


export const setConfigVar = (type, value) =>{
  switch (type) {
    case COLOR:
      return {
        type: SET_COLOR,
        value: value
      }
    case BRAKE_SCALAR:
      return {
        type: SET_BRAKE_SCALAR,
        value: value
      }
    case STEERING_SCALAR:
      return {
        type: SET_STEERING_SCALAR,
        value: value
      }
    case REAR_STEERING_SCALAR:
      return {
        type: SET_REAR_STEERING_SCALAR,
        value: value
      }
    case MAX_SPEED:
      return {
        type: SET_MAX_SPEED,
        value: value
      }
    case WHEEL_WIDTH:
      return {
        type: SET_WHEEL_WIDTH,
        value: value
      };
    case DRIVETRAIN:
      return {
        type: SET_DRIVETRAIN,
        value: value
      };
    case FRICTION_LIM:
      return {
        type: SET_FRICTION_LIM,
        value: value
      };
    case ENG_POWER:
      return {
        type: SET_ENG_POWER,
        value: value
      };
    case WHEEL_RAD:
      return {
        type: SET_WHEEL_RAD,
        value: value
      }
    case HULL_VERTEX:
      return {
        type: SET_HULL_VERTEX,
        polygon: value.polygon,
        index: value.index,
        x: value.x,
        y: value.y
      };

  }
};
export const removeConfigVar = (type, value) =>{
  switch (type) {
    case COLOR:
      return {
        type: CLEAR_COLOR,
        value: undefined
      }
    case WHEEL_SIZE:
      return {
        type: CLEAR_WHEEL_SIZE,
        value: undefined
      };
    case BODY:
      return {
        type: CLEAR_BODY,
        value: undefined
      };
    case DRIVETRAIN:
      return {
        type: CLEAR_DRIVETRAIN,
        value: undefined
      };
    case ENGINE:
      return {
        type: CLEAR_ENGINE,
        value: undefined
      };
  }
};

export const setCarConfig = (value) =>{
  
      return {
        type: SET_CAR_CONFIG,
        value: value
      }
  

};

