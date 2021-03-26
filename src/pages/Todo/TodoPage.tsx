import React, { useEffect } from 'react';
import './TodoPage.scss';
import useTodo from 'hooks/redux/useTodo';
import scrollTop from 'lib/scrollTop';
import TodoInput from 'components/Todo/TodoInput';

const TodoPage = () => {
  const { todo, onAddTodo, onRemoveTodo, onToggleTodo } = useTodo();

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="Todo">
      <div className="Todo_reduxContainer">
        <TodoInput />
      </div>
      <span className="bounce_animation">아래로 스크롤해서 소스코드를 확인해보세요!</span>
      <div className="Todo_codeContainer">투두리스트 코드를 여기에 추가해주세요</div>
    </div>
  );
};

export default TodoPage;
