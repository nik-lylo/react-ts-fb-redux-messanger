import {
  AuthActionEnum,
  SetAuthAction,
  SetAuthError,
  SetIsAuthLoading,
  SetIsOnAuthStateBlocked,
  SetIsOnAuthStateStarted,
  SetUserSnapId,
} from "../types";
export const AuthActionCreators = {
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_IS_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsAuthLoading => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setAuthError: (payload: string | null): SetAuthError => ({
    type: AuthActionEnum.SET_AUTH_ERROR,
    payload,
  }),
  setIsOnAuthStateStarted: (payload: boolean): SetIsOnAuthStateStarted => ({
    type: AuthActionEnum.SET_IS_ON_AUTH_STATE_STARTED,
    payload,
  }),
  setIsOnAuthStateBlocked: (payload: boolean): SetIsOnAuthStateBlocked => ({
    type: AuthActionEnum.SET_IS_ON_AUTH_STATE_BLOCKED,
    payload,
  }),
  setSnapUserId: (payload: string | null): SetUserSnapId => ({
    type: AuthActionEnum.SET_USER_SNAP_ID,
    payload,
  }),
};
