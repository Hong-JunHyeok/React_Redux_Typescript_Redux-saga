import { RootState } from 'modules';
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
