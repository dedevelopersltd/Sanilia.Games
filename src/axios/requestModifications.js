export const requestHandler = (request) => {
    const token = localStorage.getItem('token');
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  };
  
  export const successHandler = (response) => ({
    ...response,
    data: response.data,
  });
  
  export const errorHandler = (error) => {
    const { status, data } = error.response || {};
    if (status === 401 || data?.message === 'Unauthorized Access to an operation') {
      // Handle unauthorized access, e.g., redirect to login or clear auth data
    }
    return Promise.reject(error);
  };
  