import React from 'react';
import Button from 'components/Common/Button';
import './TodoInput.scss';
import Input from 'components/Common/Input';

const TodoInput = () => {
  return (
    <form className="TodoInput">
      <Input />
      <Button>추가</Button>
    </form>
  );
};

export default TodoInput;
