import usePosts from 'hooks/redux/usePosts';
import { Post, Posts } from 'modules/jsonPlaceholder';
import React, { useEffect } from 'react';
import './JsonPlaceholder.scss';

const JsonPlaceholder = () => {
  const { posts, loading, error, onReloadPosts } = usePosts();
  useEffect(() => {
    onReloadPosts();
  }, []);
  const mapPosts = posts?.map((post: Post) => <>{post.title}</>);

  if (loading) {
    return <>Loading</>;
  }
  if (error) {
    return <>Error</>;
  }
  return <>{mapPosts}</>;
};

export default JsonPlaceholder;
