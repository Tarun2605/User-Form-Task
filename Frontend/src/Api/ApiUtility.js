// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://userformtask-backend.onrender.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API call functions
export const welcomeUser = () => {
  return api.get('/');
};

export const getAllFeedback = (id) => {
  return api.get(`getFeedbacks`);
};

export const postFeedback = (feedBack) => {
  return api.post('/addFeedback', feedBack);
};

// Export the configured axios instance if needed
export default api;
