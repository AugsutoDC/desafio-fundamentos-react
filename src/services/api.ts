import axios from 'axios';

const api = axios.create({
  baseURL: 'https://go-finances.herokuapp.com',
});

export default api;
