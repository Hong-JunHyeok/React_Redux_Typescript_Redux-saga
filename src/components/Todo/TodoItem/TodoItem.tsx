import { Todo } from 'modules/todo/types';
import React from 'react';
import './TodoItem.scss';

const TodoItem = ({ id, todo, done }: Todo) => {
  return (
    <li key={id} className={done ? 'TodoItem TodoItem_done_style' : 'TodoItem'}>
      {todo}
    </li>
  );
};

export default TodoItem;
