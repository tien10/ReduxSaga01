import { fork, take, call, put, delay } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';
import { getList } from '../apis/task';
import { STATUES_CODE } from '../constants';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';
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

function* watchCreateTaskAction() {
  yield true;
  console.log('watchCreateTaskAction');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}
export default rootSaga;
