import { AxiosError } from 'axios';
import { CALL_DATA, CALL_DATA_SUCCESS, CALL_DATA_ERROR, JsonPlaceholderActions } from './actions';
import { Posts } from './types';

type JsonPlaceholderState = {
  loading: boolean;
  data: Posts | null;
  error: AxiosError | null;
};
const initialState: JsonPlaceholderState = {
  loading: false,
  data: null,
  error: null,
};

function jsonPlaceholderReducer(state = initialState, action: JsonPlaceholderActions) {
  switch (action.type) {
    case CALL_DATA:
      return {
        ...state,
        loading: true,
      };
    case CALL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CALL_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default jsonPlaceholderReducer;
