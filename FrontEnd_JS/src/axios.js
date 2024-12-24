// axiosInstance.js
import axios from 'axios';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,  // Set the backend URL from .env file
  withCredentials: true,  // Optional: Allow sending cookies if needed
  headers: {
    'Content-Type': 'application/json',  // Set default content type to JSON
  },
});

export default axiosInstance;

