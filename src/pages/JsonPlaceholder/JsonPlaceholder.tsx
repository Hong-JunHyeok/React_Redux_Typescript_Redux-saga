import PostItem from 'components/JsonPlaceholder/PostItem';
import usePosts from 'hooks/redux/usePosts';
import { Post, Posts } from 'modules/jsonPlaceholder';
import React, { useEffect } from 'react';
import './JsonPlaceholder.scss';

const JsonPlaceholder = () => {
  const { posts, loading, error, onReloadPosts } = usePosts();
  useEffect(() => {
    onReloadPosts();
  }, []);
  const mapPosts = posts?.map((post: Post) => (
    <PostItem title={post.title} userId={post.userId} body={post.body} id={post.id} key={post.id} />
  ));

  if (loading) {
    return <>Loading</>;
  }
  if (error) {
    return <>Error</>;
  }
  return <>{mapPosts}</>;
};

export default JsonPlaceholder;
