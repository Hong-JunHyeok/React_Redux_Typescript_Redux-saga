import { AxiosError } from 'axios';
import { Posts } from './types';

export const CALL_DATA = 'CALL_DATA' as const;
export const CALL_DATA_SUCCESS = 'CALL_DATA_SUCCESS' as const;
export const CALL_DATA_ERROR = 'CALL_DATA_ERROR' as const;

export const callData = () => ({
  type: CALL_DATA,
});
export const callDataSuccess = (data: Posts) => ({
  type: CALL_DATA_SUCCESS,
  payload: data,
});
export const callDataError = (error: AxiosError) => ({
  type: CALL_DATA_ERROR,
  payload: error,
});

export type JsonPlaceholderActions =
  | ReturnType<typeof callData>
  | ReturnType<typeof callDataSuccess>
  | ReturnType<typeof callDataError>;
