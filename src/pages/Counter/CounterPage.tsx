import React, { useEffect } from 'react';
import './CounterPage.scss';
import useCount from 'hooks/redux/useCount';
import Button from 'components/Common/Button';
import Highlight from 'react-highlight.js';
import { sourceCode } from 'data/counterData';
import scrollTop from 'lib/scrollTop';

const Counter = () => {
  const { number, onIncrease, onDecrease } = useCount();
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className="CounterPage">
      <div className="CounterPage_reduxContainer">
        <h6>리덕스 Devtools를 이용하여 액션의 변화를 관찰해보세요!</h6>
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
        <span className="bounce_animation">아래로 스크롤해서 소스코드를 확인해보세요!</span>
      </div>
      <div className="CounterPage_codeContainer">
        <h1 className="ounterPage_codeContainer_title">소스코드</h1>
        <div className="CounterPage_codeContainer_card">
          <h2>CounterActions.ts</h2>
          <Highlight language="typescript">{sourceCode.actions}</Highlight>
        </div>
        <div className="CounterPage_codeContainer_card">
          <h2>CounterReducer.ts</h2>
          <Highlight language="typescript">{sourceCode.reducer}</Highlight>
        </div>
        <div className="CounterPage_codeContainer_card">
          <h2>useCounter.ts</h2>
          <Highlight language="typescript">{sourceCode.hooks}</Highlight>
        </div>
      </div>
    </div>
  );
};

export default Counter;
