import React from 'react';
import './PostList.scss';

interface PropsType {
  children: React.ReactNode;
}

const PostList = ({ children }: PropsType) => {
  return <div className="PostList">{children}</div>;
};

export default PostList;
