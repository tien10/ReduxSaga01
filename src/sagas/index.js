import { fork, take, call, put } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';
import { getList } from '../apis/task';
import { STATUES_CODE } from '../constants';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    const resp = yield call(getList);
    console.log('resp: ', resp);
    const { status, data } = resp;
    if (status === STATUES_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
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
