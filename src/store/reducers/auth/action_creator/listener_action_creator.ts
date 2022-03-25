import { onAuthStateChanged } from "firebase/auth";
import { AppDispatch } from "../../..";
import { firebaseAuth } from "../../../../lib/firebase";
import { AuthReducerActionCreators } from "./reducer_action_creator";

export const AuthListenerActionCreators = {
  setListenerAuthState: () => (dispatch: AppDispatch) => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch(AuthReducerActionCreators.setUserSnapId(user.uid));
      } else {
        dispatch(AuthReducerActionCreators.setUserSnapId(null));
      }
      dispatch(AuthReducerActionCreators.setIsListenerAuthStarted(true));
    });
  },
};
