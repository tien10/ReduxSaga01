import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

// de /tasks la khong load duoc
const url = 'tasks';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
