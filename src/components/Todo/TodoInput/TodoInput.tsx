import useTodo from 'hooks/redux/useTodo';
import React, { useEffect, useState } from 'react';
import './TodoInput.scss';

interface PropsType {
  handleSubmit: (...args: any) => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const TodoInput = ({ handleSubmit, input, setInput }: PropsType) => {
  return (
    <form className="TodoInput" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        className="TodoInput_input"
        placeholder="입력 후 엔터를 눌러보세요!"
      />
    </form>
  );
};

export default TodoInput;
