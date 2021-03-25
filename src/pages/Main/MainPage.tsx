import Box from 'components/Common/Box';
import React from 'react';
import './MainPage.scss';
import { lectures } from 'data/lectureData';

const MainPage = () => {
  const mapLecture = lectures.map((item) => (
    <div className="mainPage_boxList">
      <Box title={item.title} summary={item.summary} link={item.link} />
    </div>
  ));
  return (
    <div className="mainPage">
      <h1 className="mainPage_title">REDUX REDUX-SAGA TYPESCRIPT REACT</h1>
      <div className="mainPage_subTitle">
        리덕스,리덕스 사가,타입스크립트,리액트를 프로처럼 프로답게 사용하는 법을 알아보도록 합시다.
      </div>
      <hr />
      {mapLecture}
    </div>
  );
};

export default MainPage;
