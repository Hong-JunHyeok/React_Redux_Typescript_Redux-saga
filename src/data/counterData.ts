export const sourceCode = {
  actions: `export const INCREASE = 'counter/INCREASE' as const;
    export const DECREASE = 'counter/DECREASE' as const;
    
    export const increase = () => ({
      type: INCREASE,
    });
    export const decrease = () => ({
      type: DECREASE,
    });
    
    export type CounterActions = ReturnType<typeof increase> | ReturnType<typeof decrease>;
    `,

  reducer: `import { INCREASE, DECREASE, CounterActions } from '../actions/counterActions';

      type State = {
        count: number;
      };
      
      const initialState: State = {
        count: 0,
      };
      
      function counterReducer(state: State = initialState, action: CounterActions) {
        switch (action.type) {
          case INCREASE:
            return { count: state.count + 1 };
          case DECREASE:
            return { count: state.count - 1 };
          default:
            return state;
        }
      }
      
      export default counterReducer;
      `,
  hooks: `import { useDispatch, useSelector } from 'react-redux';
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
      
        return { number, onIncrease, onDecrease };
      };
      
      export default useCount;
      `,
};
