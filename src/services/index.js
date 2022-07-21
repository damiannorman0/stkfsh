const api = 'https://www.coingecko.com/en/api';

const getItems = () => {
  return new Promise((resolve, reject) => {
    fetch(api).then((response) => {
      return (response.json());
    }).then((json) => {
      resolve(json);
    }).catch((err) => {
      reject(err);
    });
  });
};

const getDetail = (id) => {
  const detailURL = `${api}/detail/${id}`;
  return new Promise((resolve, reject) => {
    fetch(detailURL).then((response) => {
      return (response.json());
    }).then((json) => {
      resolve(json);
    }).catch((err) => {
      reject(err);
    });
  });
};

export {
  getItems,
  getDetail,
}