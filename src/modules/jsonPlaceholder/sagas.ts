import { put, call, takeEvery } from 'redux-saga/effects';
import { callDataError, callDataSuccess, CALL_DATA } from './actions';
import { getPosts } from 'lib/api/getPosts';
import { AxiosResponse } from 'axios';

function* getPostsSaga() {
  try {
    const posts: AxiosResponse = yield call(getPosts);
    yield put(callDataSuccess(posts.data));
  } catch (error) {
    yield put(callDataError(error));
  }
}

export function* postsSaga() {
  yield takeEvery(CALL_DATA, getPostsSaga);
}
