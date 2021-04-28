const questions = (state={},action)=>{
    switch(action.type){
        case("SET_QUESTIONS"):
            return Object.assign({},state,action.value);
        default:
            return state;
    }
}

export default questions;