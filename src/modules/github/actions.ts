import { AxiosError } from 'axios';
import { GithubUser } from './types';

export const GET_USER = 'github/GET_USER' as const;
export const GET_USER_SUCCESS = 'github/GET_USER_SUCCESS' as const;
export const GET_USER_ERROR = 'github/GET_USER_ERROR' as const;

export const getUser = (username: string) => ({
  type: GET_USER,
  payload: username,
});
export const getUserSuccess = (data: GithubUser) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});
export const getUserError = (error: AxiosError) => ({
  type: GET_USER_ERROR,
  payload: error,
});

export type GithubActions =
  | ReturnType<typeof getUser>
  | ReturnType<typeof getUserSuccess>
  | ReturnType<typeof getUserError>;
