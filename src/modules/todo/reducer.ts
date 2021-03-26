import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, TodoActions } from './actions';
import { Todos } from './types';

const intialState: Todos = [
  {
    id: 1,
    title: '9:00시 친구와 외식하러 가기',
    content: '위치 : 아웃백 스테이크 하우스',
    done: false,
  },
];

function todoReducer(state = intialState, action: TodoActions) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
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
