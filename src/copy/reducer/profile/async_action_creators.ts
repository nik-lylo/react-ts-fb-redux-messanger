// import { AppDispatch } from "../../..";
// import { downloadPhoto } from "../../../../api/profile/downloadPhoto";
// import { updateProfileInfo } from "../../../../api/profile/updateProfileInfo";
// import { uploadPhoto } from "../../../../api/profile/uploadPhoto";
// import { uploadUpdateUser } from "../../../../api/user/uploadUpdateUser";
// import { filterEditObject } from "../../../../lib/controlFunc/profile/filterEditObject";
// import { IGenericObject } from "../../../../lib/models/ICommon";
// import { AuthActionCreators } from "../../auth/action-creators/reducer_action_creators";
// import { ProfileActionCreators } from "./reducer_action_creators";
// import { fetchUser } from "../../../../api/user/fetchUser";
// import { isEmptyObj } from "../../../../lib/helper/isEmptyObj";
// import { updateProfileMain } from "../../../../api/profile/updateProfileMain";

import { IGenericObject } from "../../../lib/models/DefaultValue";
import { AppDispatch } from "../../../store";

export const AsyncProfileActionCreators = {
  // setProfileUserUrlPhoto:
  //   (userId: string, file: any) => async (dispatch: AppDispatch) => {
  //     dispatch(AuthActionCreators.setIsLoading(true));
  //     try {
  //       await uploadPhoto(`userPhoto/${userId}`, file);
  //       const linkPhoto = await downloadPhoto(`userPhoto/${userId}`);
  //       const photoObj = { urlPhoto: linkPhoto };
  //       await uploadUpdateUser(userId, photoObj);
  //       dispatch(ProfileActionCreators.setNewPhotoUrl(linkPhoto));
  //       dispatch(AuthActionCreators.setAuthError(null));
  //     } catch (e: any) {
  //       dispatch(AuthActionCreators.setAuthError(e.message));
  //     } finally {
  //       dispatch(AuthActionCreators.setIsLoading(false));
  //     }
  //   },
  // setUpdateProfileUserPhoto:
  //   (userId: string, file: any, rewrite: () => void) =>
  //   async (dispatch: AppDispatch) => {
  //     dispatch(ProfileActionCreators.setAvatarUpdateLoading(true));
  //     try {
  //       await uploadPhoto(userId, file);
  //       const linkPhoto = await downloadPhoto(userId);
  //       const photoObj = { urlPhoto: linkPhoto };
  //       await uploadUpdateUser(userId, photoObj);
  //       dispatch(ProfileActionCreators.setNewPhotoUrl(linkPhoto));
  //       dispatch(ProfileActionCreators.setAvatarUpdateError(null));
  //       rewrite();
  //     } catch (e: any) {
  //       dispatch(ProfileActionCreators.setAvatarUpdateError(e.message));
  //       setTimeout(() => {
  //         ProfileActionCreators.setAvatarUpdateError(null);
  //       }, 3000);
  //     } finally {
  //       dispatch(ProfileActionCreators.setAvatarUpdateLoading(false));
  //     }
  //   },
  // setEditUser:
  //   (
  //     userId: string,
  //     infoObject: IGenericObject,
  //     mainObject: IGenericObject,
  //     profile: IGenericObject,
  //     rewrite: () => void
  //   ) =>
  //   async (dispatch: AppDispatch) => {
  //   dispatch(ProfileActionCreators.setEditLoading(true));
  //   try {
  //     const filterInfoObject = filterEditObject(infoObject);
  //     const filterMainObject = filterEditObject(mainObject);
  //     if (!isEmptyObj(filterInfoObject)) {
  //       await updateProfileInfo(userId, filterInfoObject, profile.info);
  //     }
  //     if (!isEmptyObj(filterMainObject)) {
  //       await updateProfileMain(userId, profile, filterMainObject);
  //     }
  //     // const userSnap = await fetchUser(userId);
  //     // const userProfile: any = userSnap.data();
  //     // dispatch(ProfileActionCreators.setNewUser(userProfile));
  //     rewrite();
  //   } catch (e: any) {
  //     dispatch(ProfileActionCreators.setEditError(e.message));
  //   } finally {
  //     setTimeout(() => {
  //       dispatch(ProfileActionCreators.setEditLoading(false));
  //     }, 2000);
  //   }
  // },
};
