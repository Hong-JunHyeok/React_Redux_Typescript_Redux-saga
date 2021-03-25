import React from 'react';

const MainPage = () => {
  const style: React.CSSProperties = { fontSize: '20px', fontWeight: 'bold', margin: '1rem' };
  return (
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
  );
};

export default MainPage;
