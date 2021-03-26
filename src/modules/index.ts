import { combineReducers } from 'redux';
import counter from './counter/reducer';
import todo from './todo/reducer';

const rootReducer = combineReducers({
  counter,
  todo,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
