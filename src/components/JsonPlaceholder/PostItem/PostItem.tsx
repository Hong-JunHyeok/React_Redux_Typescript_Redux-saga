import React from 'react';
import { Post } from 'modules/jsonPlaceholder/types';
import './PostItem.scss';

type PropsType = Post;

const PostItem = ({ id, title, body, userId }: PropsType) => {
  return (
    <div className="PostItem">
      <span className="PostItem_userId">{userId}</span>
      <h1 className="PostItem_title">{title}</h1>
      <p className="PostItem_body">{body}</p>
    </div>
  );
};

export default PostItem;
