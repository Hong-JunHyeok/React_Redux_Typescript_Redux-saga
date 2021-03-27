import { RootState } from 'modules';
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
