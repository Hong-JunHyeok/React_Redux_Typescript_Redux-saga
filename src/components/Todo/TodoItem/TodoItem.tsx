import Button from 'components/Common/Button';
import React from 'react';
import { Todo } from 'modules/todo/types';
import './TodoItem.scss';
import { AiFillDelete } from 'react-icons/ai';

const TodoItem = ({ id, todo, done }: Todo) => {
  return (
    <li className={done ? 'TodoItem TodoItem_done_style' : 'TodoItem'}>
      {todo}
      <AiFillDelete color="red" className="TodoItem_deleteBtn" />
    </li>
  );
};

export default TodoItem;
