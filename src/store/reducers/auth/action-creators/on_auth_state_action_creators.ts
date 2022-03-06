import { AppDispatch } from "../../..";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../../../lib/firebase";
import { AuthActionCreators } from "./reducer_action_creators";
import { IUser } from "../../../../lib/models/IUser";
import { ProfileActionCreators } from "../../profile/action-creators/reducer_action_creators";
import { fetchUser } from "../../../../api/user/fetchUser";
export const AuthOnStateActionCreators = {
  setOnAuthStateChange: () => async (dispatch: AppDispatch) => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      try {
        if (user) {
          const userSnap = await fetchUser(user.uid);
          const userObj = userSnap.data() as IUser;
          dispatch(ProfileActionCreators.setNewUser(userObj));
          dispatch(AuthActionCreators.setSnapUserId(user.uid));
          setTimeout(() => {
            dispatch(AuthActionCreators.setIsOnAuthStateStarted(true));
          }, 200);
        } else {
          setTimeout(() => {
            dispatch(AuthActionCreators.setIsOnAuthStateStarted(true));
          }, 200);
        }
      } catch (e: any) {
        setTimeout(() => {
          dispatch(AuthActionCreators.setIsOnAuthStateStarted(true));
        }, 200);
      }
    });
  },
};
