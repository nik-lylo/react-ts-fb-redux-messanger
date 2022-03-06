export interface IAuthState {
  isAuth: boolean;
  authError: null | string;
  isAuthLoading: boolean;
  isOnAuthStateStarted: boolean;
  isOnAuthStateBlocked: boolean;
  userSnapId: string | null;
}

export enum AuthActionEnum {
  SET_IS_AUTH = "SET_IS_AUTH",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_AUTH_ERROR = "SET_AUTH_ERROR",
  SET_IS_ON_AUTH_STATE_STARTED = "SET_IS_ON_AUTH_STATE_STARTED",
  SET_IS_ON_AUTH_STATE_BLOCKED = "SET_IS_ON_AUTH_STATE_BLOCKED",
  SET_USER_SNAP_ID = "SET_USER_SNAP_ID",
}

export interface SetAuthAction {
  type: AuthActionEnum.SET_IS_AUTH;
  payload: boolean;
}
export interface SetIsAuthLoading {
  type: AuthActionEnum.SET_IS_LOADING;
  payload: boolean;
}
export interface SetAuthError {
  type: AuthActionEnum.SET_AUTH_ERROR;
  payload: null | string;
}
export interface SetIsOnAuthStateStarted {
  type: AuthActionEnum.SET_IS_ON_AUTH_STATE_STARTED;
  payload: boolean;
}
export interface SetIsOnAuthStateBlocked {
  type: AuthActionEnum.SET_IS_ON_AUTH_STATE_BLOCKED;
  payload: boolean;
}
export interface SetUserSnapId {
  type: AuthActionEnum.SET_USER_SNAP_ID;
  payload: string | null;
}

export type AuthAction =
  | SetAuthAction
  | SetAuthError
  | SetIsAuthLoading
  | SetIsOnAuthStateStarted
  | SetIsOnAuthStateBlocked
  | SetUserSnapId;
