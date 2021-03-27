import React from 'react';
import './GithubCard.scss';
import { GithubUser } from 'modules/github/types';
import { BsFillPeopleFill } from 'react-icons/bs';

type PropTypes = GithubUser;

const GithubCard = ({ name, login, bio, followers, following, avatar_url }: PropTypes) => {
  return (
    <div className="GithubCard">
      <img src={avatar_url} alt="내 깃허브 이미지" className="GithubCard_avatar" />
      <h1 className="GithubCard_name">{name}</h1>
      <h6 className="GithubCard_login">{login}</h6>
      <span className="GithubCard_bio">{bio}</span>
      <span className="GithubCard_followers">
        <BsFillPeopleFill className="GithubCard_followers_icon" />
        followers : {followers}
      </span>
      <span className="GithubCard_following">following : {following}</span>
    </div>
  );
};

export default GithubCard;
