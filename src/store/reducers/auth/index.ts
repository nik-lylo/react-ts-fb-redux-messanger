import { AuthAction, AuthActionEnum, IAuthState } from "./types";

const initialState: IAuthState = {
  isAuth: false,
  authError: null,
  isAuthLoading: false,
  isOnAuthStateStarted: false,
  isOnAuthStateBlocked: false,
  userSnapId: null,
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): IAuthState {
  switch (action.type) {
    case AuthActionEnum.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionEnum.SET_IS_LOADING:
      return { ...state, isAuthLoading: action.payload };
    case AuthActionEnum.SET_AUTH_ERROR:
      return { ...state, authError: action.payload };
    case AuthActionEnum.SET_IS_ON_AUTH_STATE_STARTED:
      return { ...state, isOnAuthStateStarted: action.payload };
    case AuthActionEnum.SET_IS_ON_AUTH_STATE_BLOCKED:
      return { ...state, isOnAuthStateBlocked: action.payload };
    case AuthActionEnum.SET_USER_SNAP_ID:
      return { ...state, userSnapId: action.payload };
    default:
      return state;
  }
}
