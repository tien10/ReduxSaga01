import qs from 'query-string';
import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

// de /tasks la khong load duoc
const url = 'tasks';

export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

// http://localhost:3000/tasks method: post
export const addTask = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
