import PostItem from 'components/JsonPlaceholder/PostItem';
import PostList from 'components/JsonPlaceholder/PostList';
import usePosts from 'hooks/redux/usePosts';
import { Post } from 'modules/jsonPlaceholder';
import React, { useEffect } from 'react';
import Highlight from 'react-highlight.js';
import './JsonPlaceholder.scss';
import Spinner from 'react-spinner-material';
import Button from 'components/Common/Button';
import { sourceCode } from 'data/jsonPlaceholderData';
import scrollUp from 'lib/scrollTop';

const JsonPlaceholder = () => {
  const { posts, loading, error, onReloadPosts } = usePosts();

  useEffect(() => {
    scrollUp();
    onReloadPosts();
  }, []);

  const mapPosts = posts?.map((post: Post) => (
    <PostItem title={post.title} userId={post.userId} body={post.body} id={post.id} key={post.id} />
  ));

  return (
    <div className="JsonPlaceholder">
      <div className="JsonPlaceholder_reduxContainer">
        <h6>리덕스 Devtools를 이용하여 액션의 변화를 관찰해보세요!</h6>
        {loading ? (
          <>
            <Spinner radius={50} color={'#764abc'} stroke={5} visible={true} />
            데이터 불러오는 중...
          </>
        ) : error ? (
          <>데이터를 불러오는 과정에서 오류가 발생했습니다!</>
        ) : (
          <>
            <PostList>{mapPosts}</PostList>
            <Button
              customStyle={{
                fontSize: '14px',
              }}
              handleFunc={onReloadPosts}
            >
              새로 불러오기
            </Button>
          </>
        )}
        <span className="bounce_animation">아래로 스크롤해서 소스코드를 확인해보세요!</span>
      </div>
      <div className="JsonPlaceholder_codeContainer">
        <h1 className="JsonPlaceholder_codeContainer_title">소스코드</h1>
        <div className="JsonPlaceholder_codeContainer_card">
          <h2>JsonPlaceholderActions.ts</h2>
          <Highlight language="typescript">{sourceCode.actions}</Highlight>
        </div>
        <div className="JsonPlaceholder_codeContainer_card">
          <h2>JsonPlaceholderReducer.ts</h2>
          <Highlight language="typescript">{sourceCode.reducer}</Highlight>
        </div>
        <div className="JsonPlaceholder_codeContainer_card">
          <h2>JsonPlaceholderSagas.ts</h2>
          <Highlight language="typescript">{sourceCode.sagas}</Highlight>
        </div>
        <div className="JsonPlaceholder_codeContainer_card">
          <h2>JsonPlaceholderTypes.ts</h2>
          <Highlight language="typescript">{sourceCode.types}</Highlight>
        </div>
        <div className="JsonPlaceholder_codeContainer_card">
          <h2>usePosts.ts</h2>
          <Highlight language="typescript">{sourceCode.hooks}</Highlight>
        </div>
      </div>
    </div>
  );
};

export default JsonPlaceholder;
