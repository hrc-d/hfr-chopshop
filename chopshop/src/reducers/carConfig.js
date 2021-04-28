export const CAR_LEN_DEFAULT = 100;
export const CAR_WIDTH_DEFAULT = 50;

const carConfig = (state={}, action) =>{
	switch(action.type){
    case 'SET_CAR_CONFIG':
      return action.value;
    case 'SET_BRAKE_SCALAR':
      return {...state, brake_scalar: action.value};
    case 'SET_STEERING_SCALAR':
      return {...state, steering_scalar: action.value};
    case 'SET_REAR_STEERING_SCALAR':
      return {...state, rear_steering_scalar: action.value};
    case 'SET_MAX_SPEED':
      return {...state, max_speed: action.value};
    case 'SET_COLOR':
      return {...state, color: action.value.toString(16).padStart(6,"0")}; //pad with leading zeros for rgb hex
    case 'SET_ENG_POWER':
      return {...state, eng_power: action.value};
    case 'SET_WHEEL_RAD':
      return {...state, wheel_rad: action.value}; 
    case 'SET_WHEEL_WIDTH':
      return {...state, wheel_width: action.value}; 
    case 'SET_FRICTION_LIM':
      return {...state, friction_lim: action.value};
    case 'SET_HULL_VERTEX':
      let vCopy = state[action.polygon][action.index];
      let mirrorIndex = -1;
      if (vCopy[0] > 0 && action.x < 3) {
        action.x = 3;
      }
      if (vCopy[0] < 0 && action.x > -3) {
        action.x = -3;
      }
      for(let i=0; i<state[action.polygon].length; i++){
        if(action.index !== i && state[action.polygon][i][0]===-vCopy[0]&&state[action.polygon][i][1]===vCopy[1]){
          mirrorIndex = i;
          break;
        }
      }
      //let mirrorIndex = state[action.polygon].indexOf([-vCopy[0],vCopy[1]]);
      let polygon = state[action.polygon].map((v,i)=>(i===action.index ? [action.x,action.y] : v));
      console.log("INDICES",vCopy, state[action.polygon][mirrorIndex]);
      if(mirrorIndex>=0){
        polygon[mirrorIndex] = [-action.x,action.y];
      }
      return {...state, [action.polygon]: polygon};
    case 'SET_BODY':
      let shape = [];
      switch(action.value){
        case 'rect':
          shape = [[0,0],[CAR_LEN_DEFAULT,0],[CAR_LEN_DEFAULT, CAR_WIDTH_DEFAULT],[CAR_WIDTH_DEFAULT,0]];
          break;
        case 'triangle':
          shape = [[0,0],[CAR_LEN_DEFAULT,CAR_WIDTH_DEFAULT/2],[CAR_WIDTH_DEFAULT,0]]
          break;
        default:
          break;
      }
      return {...state, body: shape};
    case 'SET_DRIVETRAIN':
      return{...state, drivetrain: action.value};
    case 'SET_WHEEL_DIST':
      return {...state, wheelDistance: action.value};

    case 'CLEAR_COLOR':
      return {...state, color: undefined};
    case 'CLEAR_WHEEL_SIZE':
      return {...state, wheelSize : undefined};
    case 'CLEAR_MATERIAL':
      return {...state, material : undefined};
    case 'CLEAR_ENGINE':
      return {...state, engine : undefined};
    case 'CLEAR_BODY':
      return {...state, body : undefined};
    case 'CLEAR_DRIVETRAIN':
      return {...state, drivetrain : undefined};
    case 'CLEAR_WHEEL_DIST':
      return {...state, drivetrain : undefined};
    default:
			return state;
	}

}

export default carConfig;
