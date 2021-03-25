import React from 'react';
import { useHistory } from 'react-router-dom';
import './Box.scss';

interface PropsType {
  title: string;
  summary: string;
  link: string;
}
const Box = ({ title, summary, link }: PropsType) => {
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
    </div>
  );
};

export default Box;
