import React from 'react';
import './GithubCard.scss';
import { GithubUser } from 'modules/github/types';

type PropTypes = GithubUser;

const GithubCard = ({ name, email, followers, following, created_at }: PropTypes) => {
  return (
    <div className="GithubCard">
      <h1>{name}</h1>
      <h6>{email}</h6>
      <span className="GithubCard_followers">{followers}</span>
      <span className="GithubCard_following">{following}</span>
      <span>{created_at}</span>
    </div>
  );
};

export default GithubCard;
