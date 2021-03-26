import Button from 'components/Common/Button';
import React from 'react';
import { Todo } from 'modules/todo/types';
import './TodoItem.scss';
import { AiFillDelete } from 'react-icons/ai';
import useTodo from 'hooks/redux/useTodo';

const TodoItem = ({ id, todo, done }: Todo) => {
  const { onRemoveTodo, onToggleTodo } = useTodo();
  return (
    <li
      className={done ? 'TodoItem TodoItem_done_style' : 'TodoItem'}
      onClick={() => onToggleTodo(id)}
    >
      {todo}
      <AiFillDelete color="red" className="TodoItem_deleteBtn" onClick={() => onRemoveTodo(id)} />
    </li>
  );
};

export default TodoItem;
