import React from 'react';
import './CounterPage.scss';
import useCount from 'hooks/redux/useCount';

const Counter = () => {
  const { number, onIncrease, onDecrease } = useCount();
  return (
    <div className="counterPage">
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
