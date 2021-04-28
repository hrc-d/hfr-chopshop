const tabs = (state={"top":0,"bottom":0},action)=>{
    switch(action.type){
        case("SET_TAB_TOP"):
            return {...state,"top":action.value};
        case("SET_TAB_BOTTOM"):
            return {...state,"bottom":action.value};
        case("SET_VIDEO_MODAL"):
            return {...state,"video_modal":action.value};
        case("SET_SUBMIT_FORM"):
            return {...state,"submitForm":action.value};
        case("SET_HELP"):
            return {...state,"helpView":action.value};
        case("SET_CONFIG_FOCUS"):
            return {...state,"config_focus":action.value};
        default:
            return state;
    }

}
export default tabs;