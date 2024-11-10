import axios from 'axios';


import { errorHandler, requestHandler, successHandler } from './requestModifications';
import { API_BASE_URL } from '../constants/apiEndPoints';

// Create an Axios instance
const httpRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Setup interceptors
httpRequest.interceptors.request.use(requestHandler);
httpRequest.interceptors.response.use(successHandler, errorHandler);

// Export the Axios instance with methods
export default httpRequest;
