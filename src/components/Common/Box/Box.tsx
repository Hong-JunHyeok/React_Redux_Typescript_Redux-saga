import React from 'react';
import { useHistory } from 'react-router-dom';
import './Box.scss';
import redux from 'assets/icons/redux_logo.png';
import redux_saga from 'assets/icons/redux-saga_logo.png';
import { Stack } from 'data/lectureData';

interface PropsType {
  title: string;
  summary: string;
  link: string;
  stack: Stack;
}
const Box = ({ title, summary, link, stack }: PropsType) => {
  const history = useHistory();
  return (
    <div
      className="Box"
      onClick={() => {
        history.push(link);
      }}
    >
      <h1 className="Box_title">{title}</h1>
      <div className="Box_line" />
      <p className="Box_summary">{summary}</p>
      <div className="Box_iconDiv">
        {/* <img className="Box_iconDiv_icon" src={LOGO} alt="리덕스 로고" /> */}
        {stack.redux && <img className="Box_iconDiv_icon" src={redux} alt="리덕스 로고" />}
        {stack.redux_saga && (
          <img className="Box_iconDiv_icon" src={redux_saga} alt="리덕스 로고" />
        )}
      </div>
    </div>
  );
};

export default Box;
