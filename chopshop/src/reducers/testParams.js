const numEpisodes = (state="", action) =>{
	switch(action.type){
		case 'SET_NUM_EPISODES':
			return action.value;
		default:
			return state;
	}

}

export default numEpisodes;