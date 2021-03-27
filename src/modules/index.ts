import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter from './counter/reducer';
import todo from './todo/reducer';
import jsonPlaceholder, { postsSaga } from './jsonPlaceholder';
import github, { userSaga } from './github';

const rootReducer = combineReducers({
  counter,
  todo,
  jsonPlaceholder,
  github,
});

export function* rootSaga() {
  yield all([postsSaga(), userSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
