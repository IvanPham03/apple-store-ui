import axios from "axios";
import qs from "qs";
const URL = "http://localhost:3001";

export const fetchProducts = payload =>
  axios.get(`${URL}/product/filter-product`, {params: payload});
  // axios.get(`${URL}/product?${payload}`); using qs convert to string query
