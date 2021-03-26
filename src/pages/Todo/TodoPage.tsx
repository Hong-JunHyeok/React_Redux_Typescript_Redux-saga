import React, { useEffect, useState } from 'react';
import './TodoPage.scss';
import useTodo from 'hooks/redux/useTodo';
import scrollTop from 'lib/scrollTop';
import TodoInput from 'components/Todo/TodoInput';
import TodoItem from 'components/Todo/TodoItem';
import TodoTemplate from 'components/Todo/TodoTemplate';
import TodoList from 'components/Todo/TodoList';
import Highlight from 'react-highlight.js';
import { sourceCode } from 'data/todoData';

const TodoPage = () => {
  const { todo, onAddTodo } = useTodo();
  const todoMap = todo.map((item) => (
    <TodoItem key={item.id} id={item.id} done={item.done} todo={item.todo} />
  ));
  const [inputTodo, setInputTodo] = useState<string>('');

  useEffect(() => {
    scrollTop();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, todo: string) => {
    event.preventDefault();
    onAddTodo(todo);
    setInputTodo('');
  };

  return (
    <div className="Todo">
      <div className="Todo_reduxContainer">
        <h6>리덕스 Devtools를 이용하여 액션의 변화를 관찰해보세요!</h6>
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
      <div className="Todo_codeContainer">
        <h1 className="Todo_codeContainer_title">소스코드</h1>
        <div className="Todo_codeContainer_card">
          <h2>todoActions.ts</h2>
          <Highlight language="typescript">{sourceCode.actions}</Highlight>
        </div>
        <div className="Todo_codeContainer_card">
          <h2>todoReducer.ts</h2>
          <Highlight language="typescript">{sourceCode.reducer}</Highlight>
        </div>
        <div className="Todo_codeContainer_card">
          <h2>useTodo.ts</h2>
          <Highlight language="typescript">{sourceCode.hooks}</Highlight>
        </div>
        <div className="Todo_codeContainer_card">
          <h2>todoTypes.ts</h2>
          <Highlight language="typescript">{sourceCode.types}</Highlight>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
