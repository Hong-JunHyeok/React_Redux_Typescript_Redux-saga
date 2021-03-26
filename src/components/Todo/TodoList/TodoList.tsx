import React from 'react';
import './TodoList.scss';

interface PropsType {
  children: React.ReactNode;
}

const TodoList = ({ children }: PropsType) => {
  return <ul className="TodoList">{children}</ul>;
};

export default TodoList;
