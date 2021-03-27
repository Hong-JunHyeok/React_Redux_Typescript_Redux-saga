import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter from './counter/reducer';
import todo from './todo/reducer';
import jsonPlaceholder, { postsSaga } from './jsonPlaceholder';

const rootReducer = combineReducers({
  counter,
  todo,
  jsonPlaceholder,
});

export function* rootSaga() {
  yield all([postsSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
