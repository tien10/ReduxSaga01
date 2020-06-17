// import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};
export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

// export const fetchListTaskRequest = () => {
//   // eslint-disable-next-line no-unused-vars
//   return (dispatch) => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then((resp) => {
//         const { data } = resp;
//         // eslint-disable-next-line no-console
//         // console.log('data: ', data);
//         dispatch(fetchListTaskSuccess(data));
//       })
//       .catch((error) => {
//         // eslint-disable-next-line no-console
//         // console.log('error: ', error);
//         dispatch(fetchListTaskFailed(error));
//       });
//   };
// };
