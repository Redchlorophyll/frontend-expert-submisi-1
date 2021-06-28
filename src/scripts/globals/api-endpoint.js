import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  IMAGE: (size = 'small', id) => `${CONFIG.BASE_URL}images/${size}/${id}`,
  ADD_NEW_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
