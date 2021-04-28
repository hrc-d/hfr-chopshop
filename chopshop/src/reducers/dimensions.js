const dimensions = (state={}, action) =>{
	switch(action.type){
		case 'SET_WORKSPACE_HEIGHT':
			return {...state, workspaceHeight: action.height};
		case 'CLEAR_WORKSPACE_HEIGHT':
			return {...state, workspaceHeight: undefined};
		case 'SET_WORKSPACE_WIDTH':
			return {...state, workspaceWidth: action.width};
		case 'CLEAR_WORKSPACE_WIDTH':
			return {...state, workspaceWidth: undefined};
		default:
			return state;
	}

}

export default dimensions;
