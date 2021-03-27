export const GET_USER = 'github/GET_USER' as const;
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS' as const;
export const GET_USER_ERROR = 'GET_USER_ERROR' as const;

export const getUser = () => ({
  type: GET_USER,
});
export const getUserSuccess = () => ({
  type: GET_USER_SUCCESS,
});
export const getUserError = () => ({
  type: GET_USER_ERROR,
});

export type GithubActions =
  | ReturnType<typeof getUser>
  | ReturnType<typeof getUserSuccess>
  | ReturnType<typeof getUserError>;
