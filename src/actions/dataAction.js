import {getItems} from "../services";

export const dataAction = () => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		return new Promise((resolve, reject) => {
			const get = async () => {
				try {
					const data = await getItems();
					resolve(data);

				} catch (err) {
					reject(err);
				}
			}

			get();
		});
	};
};
