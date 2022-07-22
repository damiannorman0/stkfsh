import {getDetail} from "../services";

export const detailAction = (id) => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});

			const get = async () => {
				try {
					const data = await getDetail(id);
					dispatch({
						type: 'GET_DETAIL_ACTION',
						payload: data
					});
				} catch (err) {
					console.warn(err);
				}
			}

			get();
	};
};
