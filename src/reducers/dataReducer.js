const initialState = {
	loading: false,
	data: [],
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

		default:
			return state
	}
}

export default dataReducer;
