import { Todo } from './types';

export const ADD_TODO = 'todo/ADD_TODO' as const;
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
