export const sourceCode = {
  actions: `export const ADD_TODO = 'todo/ADD_TODO' as const;
  export const REMOVE_TODO = 'todo/REMOVE_TODO' as const;
  export const TOGGLE_TODO = 'todo/TOGGLE_TODO' as const;
  
  export const addTodo = (todo: string) => ({
    type: ADD_TODO,
    payload: todo,
  });
  export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id,
  });
  export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id,
  });
  
  export type TodoActions =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof removeTodo>
    | ReturnType<typeof toggleTodo>;
  `,
  reducer: `import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, TodoActions } from './actions';
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
  `,
  hooks: `import { RootState } from 'modules';
  import { addTodo, removeTodo, toggleTodo } from 'modules/todo/actions';
  import { useCallback } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  
  const useTodo = () => {
    const todo = useSelector((state: RootState) => state.todo);
    const dispatch = useDispatch();
  
    const onAddTodo = useCallback(
      (todo: string) => {
        dispatch(addTodo(todo));
      },
      [dispatch]
    );
    const onRemoveTodo = useCallback(
      (id: number) => {
        dispatch(removeTodo(id));
      },
      [dispatch]
    );
    const onToggleTodo = useCallback(
      (id: number) => {
        dispatch(toggleTodo(id));
      },
      [dispatch]
    );
  
    return { todo, onAddTodo, onRemoveTodo, onToggleTodo };
  };
  
  export default useTodo;
  `,
  types: `export type Todo = {
    id: number;
    todo: string;
    done: boolean;
  };
  export type Todos = Todo[];
  `,
};
