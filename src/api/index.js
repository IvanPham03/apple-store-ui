import axios from 'axios';

const URL = 'http://localhost:3001';

export const fetchProducts = () => axios.get(`${URL}/posts`);
export const createProduct = (payload) => axios.post(`${URL}/posts`, payload);
export const updateProduct = (payload) =>
  axios.post(`${URL}/product/update`, payload);