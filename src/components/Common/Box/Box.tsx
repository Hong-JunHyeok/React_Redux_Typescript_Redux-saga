import React from 'react';
import { useHistory } from 'react-router-dom';
import { BoxContainer } from './Box.style';

interface PropsType {
  title: string;
  summary: string;
  link: string;
}
const Box = ({ title, summary, link }: PropsType) => {
  const history = useHistory();
  return (
    <BoxContainer
      onClick={() => {
        history.push(link);
      }}
    >
      <h1>{title}</h1>
      <p>{summary}</p>
    </BoxContainer>
  );
};

export default Box;
