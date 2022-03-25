import {
  AuthActionEnum,
  SetAuthError,
  SetIsAuth,
  SetIsListenerAuthBlocked,
  SetIsListenerAuthStarted,
  SetUserSnapId,
} from "../types";

export const AuthReducerActionCreators = {
  setUserSnapId: (state: string | null): SetUserSnapId => ({
    type: AuthActionEnum.SET_USER_SNAP_ID,
    payload: state,
  }),
  setIsAuth: (flag: boolean): SetIsAuth => ({
    type: AuthActionEnum.SET_IS_AUTH,
    payload: flag,
  }),
  setIsListenerAuthStarted: (flag: boolean): SetIsListenerAuthStarted => ({
    type: AuthActionEnum.SET_IS_LISTENER_AUTH_STARTED,
    payload: flag,
  }),
  setIsListenerAuthBlocked: (flag: boolean): SetIsListenerAuthBlocked => ({
    type: AuthActionEnum.SET_IS_LISTENER_AUTH_BLOCKED,
    payload: flag,
  }),
  setAuthError: (err: string | null): SetAuthError => ({
    type: AuthActionEnum.SET_AUTH_ERROR,
    payload: err,
  }),
};
