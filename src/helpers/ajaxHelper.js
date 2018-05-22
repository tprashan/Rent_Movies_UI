/* global window */
import axios from 'axios';
import axiosCancel from 'axios-cancel';

axiosCancel(axios);

const ajax = axios.create({});

ajax.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = error.response.headers.location;
    }
    return Promise.reject(error);
  }
);

ajax.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default ajax;
