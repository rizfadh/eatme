import CONFIG from './config';

const API_ENDPOINT = {
  EXPLORE: `${CONFIG.API_URL}/list`,
  DETAIL: (id) => `${CONFIG.API_URL}/detail/${id}`,
  ADD_REVIEW: `${CONFIG.API_URL}/review`,
  SEARCH: (query) => `${CONFIG.API_URL}/search?q=${query}`,
};

export default API_ENDPOINT;
