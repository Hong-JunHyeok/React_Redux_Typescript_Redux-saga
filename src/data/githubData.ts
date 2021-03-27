export const sourceCode = {
  actions: `import { AxiosError } from 'axios';
  import { GithubUser } from './types';
  
  export const GET_USER = 'github/GET_USER' as const;
  export const GET_USER_SUCCESS = 'github/GET_USER_SUCCESS' as const;
  export const GET_USER_ERROR = 'github/GET_USER_ERROR' as const;
  
  export const getUser = (username: string) => ({
    type: GET_USER,
    payload: username,
  });
  export const getUserSuccess = (data: GithubUser) => ({
    type: GET_USER_SUCCESS,
    payload: data,
  });
  export const getUserError = (error: AxiosError) => ({
    type: GET_USER_ERROR,
    payload: error,
  });
  
  export type GithubActions =
    | ReturnType<typeof getUser>
    | ReturnType<typeof getUserSuccess>
    | ReturnType<typeof getUserError>;
  `,
  reducer: `import { AxiosError } from 'axios';
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
  `,
  sagas: `import { AxiosResponse } from 'axios';
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
  `,
  hooks: `import { RootState } from 'modules';
  import { getUser } from 'modules/github';
  import { useCallback } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  
  const useGithub = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.github);
    const { data: user, error, loading } = state;
  
    const onGetUser = useCallback(
      (username: string) => {
        dispatch(getUser(username));
      },
      [dispatch]
    );
  
    return {
      user,
      error,
      loading,
      onGetUser,
    };
  };
  
  export default useGithub;
  `,
  types: `export type GithubUser = {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: string;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  };
  `,
};
