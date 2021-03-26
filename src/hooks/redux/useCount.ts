import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { increase, decrease } from 'modules/counter/actions';
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

  return { number, onIncrease, onDecrease };
};

export default useCount;
