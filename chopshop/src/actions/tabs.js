export const SET_TAB_TOP = 'SET_TAB_TOP';
export const SET_TAB_BOTTOM = 'SET_TAB_BOTTOM';
export const SET_VIDEO_MODAL = 'SET_VIDEO_MODAL';
export const SET_SUBMIT_FORM = 'SET_SUBMIT_FORM';
export const SET_HELP = 'SET_HELP';
export const TAB_TOP = 'TAB_TOP';
export const TAB_BOTTOM = 'TAB_BOTTOM';
export const VIDEO_MODAL = 'VIDEO_MODAL';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const HELP_VIEW = 'HELP_VIEW';
export const TEST_DRIVE_TAB = 1;
export const TUNING_TAB = 0;
export const SET_CONFIG_FOCUS = 'SET_CONFIG_FOCUS';

export const setTab = (tabbedView,value) =>{
	switch(tabbedView){
        case TAB_TOP:
            return {
                type: SET_TAB_TOP,
                value: value
            }
        case TAB_BOTTOM:
            return {
                type: SET_TAB_BOTTOM,
                value: value
            }
        case VIDEO_MODAL:
            return {
                type: SET_VIDEO_MODAL,
                value: value //1 is display, 0 is not-displayed
            }
        case SUBMIT_FORM:
            return {
                type: SET_SUBMIT_FORM,
                value: value //1 is display, 0 is not-displayed
            }
        case HELP_VIEW:
            return {
                type: SET_HELP,
                value: value //1 is display, 0 is not-displayed
            }
	};
};

export const setConfigFocus = (value) =>{

    return {
      type: SET_CONFIG_FOCUS,
      value: value
    }
  
  }