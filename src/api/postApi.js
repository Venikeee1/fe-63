import axios from 'axios';

const BASE_URL = 'https://hn.algolia.com/api/v1';

export const fetchPostsList = (query) => {
  return axios.get(`${BASE_URL}/search?query=${query}`);
};

export const fetchPostById = (id) => {
  return axios.get(`${BASE_URL}/items/${id}`);
};
