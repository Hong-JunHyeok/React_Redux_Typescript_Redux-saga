import Input from 'components/Common/Input';
import GithubCard from 'components/Github/GithubCard';
import useGithub from 'hooks/redux/useGithub';
import scrollUp from 'lib/scrollTop';
import React, { useCallback, useEffect, useState } from 'react';
import Spinner from 'react-spinner-material';
import './GithubPage.scss';
import Highlight from 'react-highlight.js';
import { sourceCode } from 'data/githubData';

const GithubPage = () => {
  const [username, setUsername] = useState('Hong-JunHyeok');
  const { user, loading, onGetUser } = useGithub();

  useEffect(() => {
    scrollUp();
    onGetUser(username);
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (username) {
        onGetUser(username);
      }
    },
    [onGetUser, username]
  );

  return (
    <div className="GithubPage">
      <div className="GithubPage_reduxContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="엔터를 눌러 검색해보세요"
            className="GithubPage_reduxContainer_input"
          />
        </form>
        {loading ? (
          <Spinner radius={50} color={'#764abc'} stroke={5} visible={true} />
        ) : (
          <GithubCard {...user!} />
        )}
        <span className="bounce_animation">아래로 스크롤해서 소스코드를 확인해보세요!</span>
      </div>
      <h1 className="GithubPage_codeContainer_title">소스코드</h1>
      <div className="GithubPage_codeContainer_card">
        <h2>GithubPageActions.ts</h2>
        <Highlight language="typescript">{sourceCode.actions}</Highlight>
      </div>
      <div className="GithubPage_codeContainer_card">
        <h2>GithubPageReducer.ts</h2>
        <Highlight language="typescript">{sourceCode.reducer}</Highlight>
      </div>
      <div className="GithubPage_codeContainer_card">
        <h2>GithubPageSagas.ts</h2>
        <Highlight language="typescript">{sourceCode.sagas}</Highlight>
      </div>
      <div className="GithubPage_codeContainer_card">
        <h2>GithubPageTypes.ts</h2>
        <Highlight language="typescript">{sourceCode.types}</Highlight>
      </div>
      <div className="GithubPage_codeContainer_card">
        <h2>usePosts.ts</h2>
        <Highlight language="typescript">{sourceCode.hooks}</Highlight>
      </div>
    </div>
  );
};
export default GithubPage;
