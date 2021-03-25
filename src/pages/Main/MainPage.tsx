import Box from 'components/Common/Box';
import React from 'react';
import { BoxList } from './MainPage.style';

const MainPage = () => {
  const style: React.CSSProperties = { fontSize: '20px', fontWeight: 'bold', margin: '1rem' };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        React <p style={style}>X</p> Redux <p style={style}>X</p> Typescript <p style={style}>X</p>{' '}
        Redux-saga
      </div>
      <BoxList>
        <Box title="카운터" summary="Redux를 이용해서 간단한 카운터를 만들어봅시다" link="/" />
      </BoxList>
    </div>
  );
};

export default MainPage;
