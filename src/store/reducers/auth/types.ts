export interface IAuthState {
  userSnapId: string | null;
  isListenerAuthStarted: boolean;
  isListenerAuthBlocked: boolean;
  isAuth: boolean;
  authError: string | null;
}

export enum AuthActionEnum {
  SET_USER_SNAP_ID = "SET_USER_SNAP_ID",
  SET_IS_LISTENER_AUTH_STARTED = "SET_IS_LISTENER_AUTH_STARTED",
  SET_IS_LISTENER_AUTH_BLOCKED = "SET_IS_LISTENER_AUTH_BLOCKED",
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_AUTH_ERROR = "SET_AUTH_ERROR",
}

export interface SetUserSnapId {
  type: AuthActionEnum.SET_USER_SNAP_ID;
  payload: string | null;
}
export interface SetIsListenerAuthStarted {
  type: AuthActionEnum.SET_IS_LISTENER_AUTH_STARTED;
  payload: boolean;
}
export interface SetIsListenerAuthBlocked {
  type: AuthActionEnum.SET_IS_LISTENER_AUTH_BLOCKED;
  payload: boolean;
}
export interface SetIsAuth {
  type: AuthActionEnum.SET_IS_AUTH;
  payload: boolean;
}
export interface SetAuthError {
  type: AuthActionEnum.SET_AUTH_ERROR;
  payload: string | null;
}

export type AuthAction =
  | SetUserSnapId
  | SetIsListenerAuthStarted
  | SetIsListenerAuthBlocked
  | SetIsAuth
  | SetAuthError;
