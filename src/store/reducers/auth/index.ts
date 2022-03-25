import { AuthAction, AuthActionEnum, IAuthState } from "./types";

const initialState: IAuthState = {
  userSnapId: null,
  authError: null,
  isAuth: false,
  isListenerAuthBlocked: false,
  isListenerAuthStarted: false,
};

export default function authReducer(
  state = initialState,
  action: AuthAction
): IAuthState {
  switch (action.type) {
    case AuthActionEnum.SET_USER_SNAP_ID:
      return { ...state, userSnapId: action.payload };
    case AuthActionEnum.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionEnum.SET_AUTH_ERROR:
      return { ...state, authError: action.payload };
    case AuthActionEnum.SET_IS_LISTENER_AUTH_BLOCKED:
      return { ...state, isListenerAuthBlocked: action.payload };
    case AuthActionEnum.SET_IS_LISTENER_AUTH_STARTED:
      return { ...state, isListenerAuthStarted: action.payload };
    default:
      return state;
  }
}
