import {
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { hideModal } from '../actions/modal';
import {
  addTaskFailed,
  addTaskSuccess,
  fetchListTask,
  fetchListTaskFailed,
  fetchListTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading } from '../actions/ui';
import { addTask, getList } from '../apis/task';
import { STATUES_CODE, STATUSES } from '../constants';
import * as taskTypes from '../constants/task';

/*
B1: Thuc thi action fetch task
B2: Goi api
  B2.1: Kiem tra thanh tien trinh (loading)
B3: Kiem tra status code
  Neu thanh cong...
  Neu that bai...
B4: Tat loading
B5: Thuc thi cac cong viec tiep theo
*/

function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    console.log('action: ', action);
    const { params } = action.payload;
    const resp = yield call(getList, params);
    // eslint-disable-next-line no-console
    console.log('resp: ', resp);
    const { status, data } = resp;
    if (status === STATUES_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

// function* watchCreateTaskAction() {
//   yield true;
//   console.log('watchCreateTaskAction');
// }

function* filterTaskSaga({ payload }) {
  // nguoi dung nhap nhieu ky tu, bo tay ra khoi ban phim 0.5s moi xu ly, giam tai cho server
  yield delay(500);
  // console.log('filter task saga', payload);
  const { keyword } = payload;
  yield put(fetchListTask({ q: keyword }));
  // // console.log(keyword);
  // // lay du lieu tu store dung select
  // const list = yield select((state) => state.task.listTask);
  // // console.log('list: ', list);
  // const filteredTask = list.filter((task) =>
  //   task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
  // );
  // // eslint-disable-next-line no-console
  // console.log('filteredTask', filteredTask);
  // yield put(filterTaskSuccess(filteredTask));
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  // goi api
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });
  console.log('resp addTask: ', resp);
  const { data, status } = resp;
  if (status === STATUES_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  // yield fork(watchCreateTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}
export default rootSaga;
