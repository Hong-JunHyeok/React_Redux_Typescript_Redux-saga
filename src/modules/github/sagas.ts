import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserError, getUserSuccess, getUser, GET_USER } from './actions';
import { getPosts } from 'lib/api/getUser';

function* getUserSaga(action: ReturnType<typeof getUser>) {
  const username = action.payload;
  try {
    const response: AxiosResponse = yield call(() => getPosts(username));
    yield put(getUserSuccess(response.data));
  } catch (error) {
    yield put(getUserError(error));
  }
}

export function* userSaga() {
  yield takeEvery(GET_USER, getUserSaga);
}
