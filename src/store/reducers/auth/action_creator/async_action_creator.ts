import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AppDispatch } from "../../..";
import { RoutesNames } from "../../../../lib/enum/router/RoutesEnum";
import { firebaseAuth } from "../../../../lib/firebase";

export const AuthAsyncActionCreators = {
  setSignIn:
    (email: string, password: string, rewrite: () => void, navigate: any) =>
    async (dispatch: AppDispatch) => {
      try {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
        rewrite();
        navigate(RoutesNames.LOUNCHER);
      } catch (e: any) {
        console.log(e.message);
      } finally {
      }
    },

  setSignOut: () => async (dispatch: AppDispatch) => {
    try {
      await signOut(firebaseAuth);
    } catch (e: any) {
      console.log(e.message);
    } finally {
    }
  },
};
