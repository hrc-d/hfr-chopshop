export const session = (state={},action)=>{
    switch(action.type){
        case("SET_SESSION"):
            if(action.value===undefined){
                return state;
            }
            return Object.assign({},state,action.value);
        default:
            return state;
    }

}
export const userId = (state="",action)=>{
    switch(action.type){
        case("SET_USER_ID"):
            if(action.value===undefined){
                return state;
            }
            return action.value;
        default:
            return state;
    }
}
