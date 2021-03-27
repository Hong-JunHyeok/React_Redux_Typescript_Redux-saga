import { useCallback } from 'react';
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
