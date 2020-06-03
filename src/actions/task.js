import * as taskApis from '../apis/task';

export const fetchListTask = () => {
  // eslint-disable-next-line no-unused-vars
  return () => {
    taskApis
      .getList()
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log('data: ', data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error: ', error);
      });
  };
};
