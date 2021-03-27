import { AxiosError } from 'axios';
import { GET_USER_ERROR, GET_USER_SUCCESS, GET_USER, GithubActions } from './actions';
import { GithubUser } from './types';

type GithubState = {
  loading: boolean;
  data: GithubUser | null;
  error: AxiosError | null;
};
const initialState: GithubState = {
  loading: false,
  data: null,
  error: null,
};

function githubReducer(state = initialState, action: GithubActions) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default githubReducer;
