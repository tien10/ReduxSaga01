import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
} from 'redux-saga/effects';
import * as taskTypes from '../constants/task';
import { getList } from '../apis/task';
import { STATUES_CODE } from '../constants';
import {
  fetchListTaskSuccess,
  fetchListTaskFailed,
  filterTaskSuccess,
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';

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
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const resp = yield call(getList);
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
  // console.log(keyword);
  // lay du lieu tu store dung select
  const list = yield select((state) => state.task.listTask);
  // console.log('list: ', list);
  const filteredTask = list.filter((task) =>
    task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
  );
  // eslint-disable-next-line no-console
  console.log('filteredTask', filteredTask);
  yield put(filterTaskSuccess(filteredTask));
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  // yield fork(watchCreateTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}
export default rootSaga;
