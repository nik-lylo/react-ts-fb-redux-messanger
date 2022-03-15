import { signOut } from "@firebase/auth";
import { AppDispatch } from "../../..";
import { fetchGoogleSignIn } from "../../../../api/auth/fetchGoogleSignIn";
import { fetchSignIn } from "../../../../api/auth/fetchSignIn";
import { fetchSignUp } from "../../../../api/auth/fetchSignUp";
import { uploadNewUser } from "../../../../api/auth/uploadNewUser";
import { fetchUser } from "../../../../api/user/fetchUser";
import { uploadIsOnline } from "../../../../api/user/uploadIsOnline";
import { googleSignInControl } from "../../../../lib/controlFunc/auth/googleSignInControl";
import { firebaseAuth } from "../../../../lib/firebase";
import { rewriteTime } from "../../../../lib/helper/rewriteTime";
import { DefaultValue } from "../../../../lib/models/DefaultValue";
import { IMessage } from "../../../../lib/models/IMessage";
import { IUser } from "../../../../lib/models/IUser";
import {
  RoutesFullAuthEnum,
  RoutesNames,
} from "../../../../lib/utilits/RoutesEnum";
import { ProfileActionCreators } from "../../profile/action-creators/reducer_action_creators";
import { AuthActionCreators } from "./reducer_action_creators";

export const AsyncAuthActionCreators = {
  setSignUpUser:
    (
      email: string,
      password: string,
      name: string,
      lastName: string,
      rewrite: () => void,
      navigate: any
    ) =>
    async (dispatch: AppDispatch) => {
      dispatch(AuthActionCreators.setIsLoading(true));
      try {
        const newUser = await fetchSignUp(email, password);
        const newDate = new Date();
        const date = `${rewriteTime("date", newDate.getDate())}-${rewriteTime(
          "month",
          newDate.getMonth()
        )}-${rewriteTime("year", newDate.getFullYear())}`;
        const userObj: IUser = {
          name: name,
          lastname: lastName,
          fullname: `${name} ${lastName}`,
          userID: newUser.user.uid,
          urlPhoto: DefaultValue.AVATAR_PHOTO,
          online: true,
          info: {
            birthDay: null,
            email: email,
            hobby: null,
            instagram: null,
            twitter: null,
            joined: date,
            location: null,
          },
          lastMessage: {} as IMessage,
        };
        await uploadNewUser(userObj, newUser.user.uid);
        await uploadIsOnline(newUser.user.uid, true);
        dispatch(ProfileActionCreators.setNewUser(userObj));
        dispatch(AuthActionCreators.setAuthError(null));
        rewrite();
        navigate(RoutesFullAuthEnum.AUTH_ADD_AVATAR);
      } catch (e: any) {
        dispatch(AuthActionCreators.setAuthError(e.message));
      } finally {
        dispatch(AuthActionCreators.setIsLoading(false));
      }
    },

  setSignInUser:
    (email: string, password: string, rewrite: () => void, navigate: any) =>
    async (dispatch: AppDispatch) => {
      dispatch(AuthActionCreators.setIsLoading(true));
      try {
        const user = (await fetchSignIn(email, password)) as IUser;
        uploadIsOnline(user.userID, true);
        dispatch(ProfileActionCreators.setNewUser({ ...user, online: true }));
        dispatch(AuthActionCreators.setAuthError(null));
        rewrite();
        dispatch(AuthActionCreators.setIsAuth(true));
        navigate(RoutesNames.MAIN);
      } catch (e: any) {
        dispatch(AuthActionCreators.setAuthError(e.message));
      } finally {
        dispatch(AuthActionCreators.setIsLoading(false));
      }
    },
  setGoogleSignIn: (navigate: any) => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setIsLoading(true));
    try {
      const googleUserSnap = await fetchGoogleSignIn();
      const checkDB = await fetchUser(googleUserSnap.user.uid);
      const user = (await googleSignInControl(
        googleUserSnap,
        checkDB
      )) as IUser;
      await uploadIsOnline(user.userID, true);
      dispatch(ProfileActionCreators.setNewUser({ ...user, online: true }));
      dispatch(AuthActionCreators.setAuthError(null));
      dispatch(AuthActionCreators.setIsAuth(true));
      navigate(RoutesNames.MAIN);
    } catch (e: any) {
      dispatch(AuthActionCreators.setAuthError(e.message));
    } finally {
      dispatch(AuthActionCreators.setIsLoading(false));
    }
  },
  setSignOutUser:
    (navigate: any, userId: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        await signOut(firebaseAuth);
        await uploadIsOnline(userId, false);
        dispatch(ProfileActionCreators.setNewUser({} as IUser));
        dispatch(AuthActionCreators.setIsAuth(false));
        navigate(RoutesNames.AUTH);
      } catch (e: any) {
        console.log(e.message);
      } finally {
        dispatch(AuthActionCreators.setIsLoading(false));
      }
    },
  setUploadUserOnline:
    (userId: string, flag: boolean) => async (dispatch: AppDispatch) => {
      try {
        console.log(userId);
        if (userId === undefined) return;
        console.log(userId);
        await uploadIsOnline(userId, flag);
      } catch (e: any) {
        console.log(e.message);
      }
    },
};
