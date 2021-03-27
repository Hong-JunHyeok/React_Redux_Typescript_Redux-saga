import Box from 'components/Common/Box';
import React from 'react';
import './MainPage.scss';
import { lectures } from 'data/lectureData';
import { GithubButton } from 'components/Common/Button/Button';

const MainPage = () => {
  const mapLecture = lectures.map((item) => (
    <div className="mainPage_boxList" key={item.id}>
      <Box title={item.title} summary={item.summary} link={item.link} stack={item.stack} />
    </div>
  ));
  return (
    <div className="mainPage">
      <h1 className="mainPage_title">REDUX REDUX-SAGA TYPESCRIPT REACT</h1>
      <div className="mainPage_subTitle">
        리덕스,리덕스 사가,타입스크립트,리액트를 프로처럼 프로답게 사용하는 법을 알아보도록 합시다.
      </div>
      <p className="mainPage_desc">
        본 사이트의 내용은 <span className="warning">100% 신뢰할 내용은 아니며</span>, 오류나 오타
        혹은 피드백이 있을 경우에 Pull Request를 해주시길 부탁드립니다. 감사합니다.
      </p>
      <hr />
      {mapLecture}
      <GithubButton link="https://github.com/Hong-JunHyeok/React_Redux_Typescript_Redux-saga" />
    </div>
  );
};

export default MainPage;
