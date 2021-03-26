import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, TodoActions } from './actions';
import { Todos } from './types';

const intialState: Todos = [
  {
    id: 1,
    todo: '스테이크 먹으러 가기',
    done: true,
  },
];

let index = intialState.length;

function todoReducer(state = intialState, action: TodoActions) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: ++index,
          todo: action.payload,
          done: false,
        },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export default todoReducer;
