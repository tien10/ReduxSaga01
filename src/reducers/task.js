import * as taskConstants from '../constants/task';
import { toastError } from '../helpers/toastHelper';

const initialState = {
  listTask: [],
  taskEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstants.FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstants.ADD_TASK: {
      return {
        ...state,
        // xoa taskEditing khi them moi task
        // taskEditing: null,
      };
    }
    case taskConstants.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: [data].concat(state.listTask),
      };
    }
    case taskConstants.ADD_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case taskConstants.SET_TASK_EDITING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      };
    }
    case taskConstants.UPDATE_TASK: {
      return {
        ...state,
        // xoa taskEditing khi them moi task
        // taskEditing: null,
      };
    }
    case taskConstants.UPDATE_TASK_SUCCESS: {
      const { data } = action.payload;
      const { listTask } = state;
      const index = listTask.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listTask.splice(0, index),
          data,
          ...listTask.splice(index + 1),
        ];
        return {
          ...state,
          listTask: newList,
        };
      }
      return {
        ...state,
        listTask: [data].concat(state.listTask),
      };
    }
    default:
      return state;
  }
};

export default reducer;
