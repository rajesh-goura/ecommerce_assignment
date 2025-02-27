import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const { token } = useAuth();

axios.interceptors.request.use(
  (config) => {
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);