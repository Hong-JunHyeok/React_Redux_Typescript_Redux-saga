import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { increase, decrease } from 'store/actions/counterActions';
import { useCallback } from 'react';

const useCount = () => {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.counter.count);

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);
  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);
  const dispatcher = {
    onIncrease,
    onDecrease,
  };

  return { number, onIncrease, onDecrease };
};

export default useCount;
