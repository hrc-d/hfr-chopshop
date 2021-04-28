const gaCars = (state=[], action) =>{
	switch(action.type){
		case 'ADD_TESTED_CAR':
			return [...state,  action.value];
		case 'CLEAR_TESTED_CARS':
			return [];
		default:
			return state;
	}

}

export default gaCars;
