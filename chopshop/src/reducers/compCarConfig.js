const compCarConfig = (state={}, action)=>{
    switch(action.type){
        case 'SET_COMP_CAR_CONFIG':
            return action.value;
        case 'CLEAR_COMP_CAR_CONFIG':
            return {};
        default:
            return state;
    }

}

export default compCarConfig;
