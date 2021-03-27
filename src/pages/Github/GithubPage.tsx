import GithubCard from 'components/Github/GithubCard';
import useGithub from 'hooks/redux/useGithub';
import scrollUp from 'lib/scrollTop';
import React, { useEffect } from 'react';
import Spinner from 'react-spinner-material';
import './GithubPage.scss';

const GithubPage = () => {
  const { user, error, loading, onGetUser } = useGithub();

  useEffect(() => {
    scrollUp();
    onGetUser('Hong-JunHyeok');
  }, [onGetUser]);

  return (
    <>
      {loading ? (
        <Spinner radius={50} color={'#764abc'} stroke={5} visible={true} />
      ) : error ? (
        <>에러 발생</>
      ) : (
        <GithubCard {...user!} />
      )}
    </>
  );
};
export default GithubPage;
