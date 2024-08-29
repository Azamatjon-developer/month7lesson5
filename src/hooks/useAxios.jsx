import axios from 'axios';
const API = import.meta.env.VITE_API;

export const axiosInstance = axios.create({ 
  baseURL: API 
});
