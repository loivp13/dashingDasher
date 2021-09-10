import axios from "axios";

console.log(process.env.REACT_APP_API_URL);
let axios_api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  crossdomain: true,
});

export default axios_api;
