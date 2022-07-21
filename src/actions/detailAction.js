import {getDetail} from "../services";

export const detailAction = (id) => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		return new Promise((resolve, reject) => {
			const get = async () => {
				try {
					const data = await getDetail(id);
					resolve(data);

				} catch (err) {
					reject(err);
				}
			}

			get();
		});
	};
};
