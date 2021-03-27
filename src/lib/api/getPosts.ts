import axios from 'axios';
import { JSON_PLACEHOLDER_SERVER } from 'config/config.json';

export const getPosts = async () => {
  const response = await axios.get(`${JSON_PLACEHOLDER_SERVER}/posts`);
  return response;
};
