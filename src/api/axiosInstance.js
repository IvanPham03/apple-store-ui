import axios from "axios";
const path = "http://localhost:3001";

const instance = axios.create({ baseURL: path, headers: {} });
export default instance