import React from 'react';
import './TodoTemplate.scss';

interface PropsType {
  children: React.ReactNode;
}

const TodoTemplate = ({ children }: PropsType) => {
  return <div className="TodoTemplate">{children}</div>;
};

export default TodoTemplate;
