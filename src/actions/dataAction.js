import {getItems} from "../services";

export const dataAction = () => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		const get = async () => {
				try {
					const data = await getItems();
					console.log('data1', data);
					dispatch({
						type: 'GET_DATA_ACTION',
						payload: data
					});

				} catch (err) {
					console.error(err);
				}
		};

		get();
	};
};
