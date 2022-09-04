import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000/',
  // baseURL: 'https://lws-redux-server-asadsanto10.herokuapp.com/',
});

export default axiosInstance;
