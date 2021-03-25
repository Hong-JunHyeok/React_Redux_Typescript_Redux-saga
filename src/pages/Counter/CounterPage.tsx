import React from 'react';
import './CounterPage.scss';
import useCount from 'hooks/redux/useCount';
import Button from 'components/Common/Button';

const Counter = () => {
  const { number, onIncrease, onDecrease } = useCount();
  return (
    <div className="CounterPage">
      <h1>Redux를 이용한 간단한 Counter</h1>
      <h1 className="CounterPage_state">{number}</h1>
      <div className="CounterPage_buttonWrap">
        <Button
          customStyle={{
            margin: '1rem',
          }}
          handleFunc={onIncrease}
        >
          +
        </Button>
        <Button
          customStyle={{
            margin: '1rem',
          }}
          handleFunc={onDecrease}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default Counter;
