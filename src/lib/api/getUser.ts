import axios, { AxiosResponse } from 'axios';
import { GITHUB_SERVER, GITHUB_ACCESS_TOKEN } from 'config/config.json';

export const getPosts = async (username: string) => {
  const response: AxiosResponse = await axios.get(`${GITHUB_SERVER}/users/${username}`, {
    headers: {
      Authorization: GITHUB_ACCESS_TOKEN,
    },
  });
  return response;
};
