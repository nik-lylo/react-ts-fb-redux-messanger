import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AppDispatch } from "../../..";
import { fetchGoogleSignIn } from "../../../../api/auth/fetchGoogleSignIn";
import { fetchSignUp } from "../../../../api/auth/fetchSignUp";
import { uploadNewUser } from "../../../../api/auth/uploadNewUser";
import { downloadPhoto } from "../../../../api/profile/downloadPhoto";
import { uploadPhoto } from "../../../../api/profile/uploadPhoto";
import { fetchUser } from "../../../../api/user/fetchUser";
import { googleSignInControl } from "../../../../lib/controller/auth/googleSignInControl";
import { RoutesNames } from "../../../../lib/enum/router/RoutesEnum";
import { firebaseAuth } from "../../../../lib/firebase";
import { DefaultAvatar } from "../../../../lib/models/DefaultValue";
import { IUser } from "../../../../lib/models/IUser";
import { AuthReducerActionCreators } from "./reducer_action_creator";

export const AuthAsyncActionCreators = {
  setSignUp:
    (
      email: string,
      password: string,
      name: string,
      lastName: string,
      avatarFile: any,
      rewrite: () => void,
      navigate: any
    ) =>
    async (dispatch: AppDispatch) => {
      dispatch(AuthReducerActionCreators.setIsAuthLoading(true));
      dispatch(AuthReducerActionCreators.setIsListenerAuthBlocked(true));
      try {
        const newUser = await fetchSignUp(email, password);
        await uploadPhoto(`userPhoto/${newUser.user.uid}`, avatarFile);
        let linkPhoto: string;
        if (avatarFile === null) {
          linkPhoto = DefaultAvatar.AVATAR_PHOTO;
        } else {
          linkPhoto = await downloadPhoto(`userPhoto/${newUser.user.uid}`);
        }
        const userObj: IUser = {
          name: name,
          lastname: lastName,
          fullname: `${name} ${lastName}`,
          userID: newUser.user.uid,
          urlPhoto: linkPhoto,
          online: true,
          info: {
            birthDay: null,
            email: email,
            hobby: null,
            instagram: null,
            twitter: null,
            joined: new Date(),
            location: null,
          },
          invitationToGroup: [],
          myGroup: [],
        };
        await uploadNewUser(userObj, newUser.user.uid);
        rewrite();
        dispatch(AuthReducerActionCreators.setIsListenerAuthBlocked(false));
        navigate(RoutesNames.LOUNCHER);
      } catch (e: any) {
        dispatch(AuthReducerActionCreators.setAuthError(e.message));
      } finally {
        dispatch(AuthReducerActionCreators.setIsAuthLoading(false));
      }
    },
  setSignIn:
    (email: string, password: string, rewrite: () => void, navigate: any) =>
    async (dispatch: AppDispatch) => {
      dispatch(AuthReducerActionCreators.setIsAuthLoading(true));
      try {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
        rewrite();
        navigate(RoutesNames.LOUNCHER);
      } catch (e: any) {
        dispatch(AuthReducerActionCreators.setAuthError(e.message));
      } finally {
        dispatch(AuthReducerActionCreators.setIsAuthLoading(false));
      }
    },
  setSignInGoogle: (navigate: any) => async (dispatch: AppDispatch) => {
    dispatch(AuthReducerActionCreators.setIsAuthLoading(true));
    try {
      const googleUserSnap = await fetchGoogleSignIn();
      const checkDB = await fetchUser(googleUserSnap.user.uid);
      await googleSignInControl(googleUserSnap, checkDB);
      navigate(RoutesNames.LOUNCHER);
    } catch (e: any) {
      dispatch(AuthReducerActionCreators.setAuthError(e.message));
    } finally {
      dispatch(AuthReducerActionCreators.setIsAuthLoading(false));
    }
  },
  setSignOut: (navigate: any) => async (dispatch: AppDispatch) => {
    try {
      await signOut(firebaseAuth);
      navigate(RoutesNames.LOUNCHER);
    } catch (e: any) {
      console.log(e.message);
    } finally {
    }
  },
};
