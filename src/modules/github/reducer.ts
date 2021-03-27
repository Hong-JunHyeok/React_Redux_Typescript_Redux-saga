import { AxiosError } from 'axios';
import { GET_USER_ERROR, GET_USER_SUCCESS, GithubActions } from './actions';
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
    case GET_USER_SUCCESS:
    case GET_USER_ERROR:
    default:
      return state;
  }
}
