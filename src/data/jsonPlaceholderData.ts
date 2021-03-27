export const sourceCode = {
  actions: `import { AxiosError } from 'axios';
    import { Posts } from './types';
    
    export const CALL_DATA = 'CALL_DATA' as const;
    export const CALL_DATA_SUCCESS = 'CALL_DATA_SUCCESS' as const;
    export const CALL_DATA_ERROR = 'CALL_DATA_ERROR' as const;
    
    export const callData = () => ({
      type: CALL_DATA,
    });
    export const callDataSuccess = (data: Posts) => ({
      type: CALL_DATA_SUCCESS,
      payload: data,
    });
    export const callDataError = (error: AxiosError) => ({
      type: CALL_DATA_ERROR,
      payload: error,
    });
    
    export type JsonPlaceholderActions =
      | ReturnType<typeof callData>
      | ReturnType<typeof callDataSuccess>
      | ReturnType<typeof callDataError>;
    `,
  reducer: `import { AxiosError } from 'axios';
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
  `,
  sagas: `import { put, call, takeEvery } from 'redux-saga/effects';
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
  `,
  types: `export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  
  export type Posts = Post[];
  `,
  hooks: `import { useCallback } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { RootState } from 'modules';
  import { callData } from 'modules/jsonPlaceholder';
  
  const usePosts = () => {
    const dispatch = useDispatch();
    const jsonPlaceholder = useSelector((state: RootState) => state.jsonPlaceholder);
    const { data, error, loading } = jsonPlaceholder;
  
    const onReloadPosts = useCallback(() => {
      dispatch(callData());
    }, [dispatch]);
  
    return { posts: data, error, loading, onReloadPosts };
  };
  
  export default usePosts;
  `,
};
