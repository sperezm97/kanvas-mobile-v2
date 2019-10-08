import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { API_URL } from 'react-native-dotenv';
import { formatRequest } from '../utils/formats';
import { Auth } from './navigation/behaviors';

const instance = axios.create({
  baseURL: API_URL || 'localhost://3000',
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.data = formatRequest(config.data);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response !== undefined) {
      const isTokenExpired =
        error.response.status == 401 || error.response.status == 403;

      if (isTokenExpired) {
        Auth();
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
