const initialState = {
	loading: false,
	data: [],
	detail:{},
};

const dataReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'LOADING_ACTION':
			return {
				...state,
				loading: true
			};

		case 'GET_DATA_ACTION':
			return {
				...state,
				loading: false,
				data: [...action.payload],
			};

		case 'GET_DETAIL_ACTION':
			console.log('data111', action.payload);
			return {
				...state,
				loading: false,
				detail: {...action.payload},
			};

		default:
			return state
	}
}

export default dataReducer;
