import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './session';

const apiService: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
});

apiService.interceptors.request.use(
  config => {
    const token = getToken();

    if (token) {
      // @ts-ignore
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  async error => Promise.reject(error)
);

export default apiService;
