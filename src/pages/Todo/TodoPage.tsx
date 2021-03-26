import React, { useEffect, useState } from 'react';
import './TodoPage.scss';
import useTodo from 'hooks/redux/useTodo';
import scrollTop from 'lib/scrollTop';
import TodoInput from 'components/Todo/TodoInput';
import TodoItem from 'components/Todo/TodoItem';
import TodoTemplate from 'components/Todo/TodoTemplate';
import TodoList from 'components/Todo/TodoList';

const TodoPage = () => {
  const { todo, onAddTodo, onRemoveTodo, onToggleTodo } = useTodo();
  const todoMap = todo.map((item) => <TodoItem id={item.id} done={item.done} todo={item.todo} />);
  const [inputTodo, setInputTodo] = useState<string>('');

  useEffect(() => {
    scrollTop();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, todo: string) => {
    event.preventDefault();
    onAddTodo(todo);
  };

  return (
    <div className="Todo">
      <div className="Todo_reduxContainer">
        <TodoTemplate>
          <TodoList>{todoMap}</TodoList>
          <TodoInput
            input={inputTodo}
            setInput={setInputTodo}
            handleSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              handleSubmit(event, inputTodo);
            }}
          />
        </TodoTemplate>
      </div>
      <span className="bounce_animation">아래로 스크롤해서 소스코드를 확인해보세요!</span>
      <div className="Todo_codeContainer">투두리스트 코드를 여기에 추가해주세요</div>
    </div>
  );
};

export default TodoPage;
