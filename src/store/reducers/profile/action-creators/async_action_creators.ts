import { AppDispatch } from "../../..";
import { downloadPhoto } from "../../../../api/profile/downloadPhoto";
import { uploadPhoto } from "../../../../api/profile/uploadPhoto";
import { uploadUpdateUser } from "../../../../api/user/uploadUpdateUser";

import { AuthActionCreators } from "../../auth/action-creators/reducer_action_creators";
import { ProfileActionCreators } from "./reducer_action_creators";

export const AsyncProfileActionCreators = {
  setProfileUserUrlPhoto:
    (userId: string, file: any) => async (dispatch: AppDispatch) => {
      dispatch(AuthActionCreators.setIsLoading(true));
      try {
        await uploadPhoto(userId, file);
        const linkPhoto = await downloadPhoto(userId);
        const photoObj = { urlPhoto: linkPhoto };
        await uploadUpdateUser(userId, photoObj);
        dispatch(ProfileActionCreators.setNewPhotoUrl(linkPhoto));
        dispatch(AuthActionCreators.setAuthError(null));
      } catch (e: any) {
        dispatch(AuthActionCreators.setAuthError(e.message));
      } finally {
        dispatch(AuthActionCreators.setIsLoading(false));
      }
    },
};
