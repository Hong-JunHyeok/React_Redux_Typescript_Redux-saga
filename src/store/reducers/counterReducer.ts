import { INCREASE, DECREASE, CounterActions } from '../actions/counterActions';

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
