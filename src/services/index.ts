import axios from 'axios';

const timeout = 30000;

const request = axios.create({
  // baseURL: process.env.HOST_API,
  baseURL: 'https://randomuser.me/api',
  timeout,
});

axios.defaults.timeout = timeout;

export default request;
