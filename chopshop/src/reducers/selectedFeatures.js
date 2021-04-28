const selectedFeatures = (state={},action)=>{
    switch(action.type){
        case("SET_SELECTED_FEATURES"):
            return Object.assign({},state,action.value);
        default:
            return state;
    }
}

export default selectedFeatures;