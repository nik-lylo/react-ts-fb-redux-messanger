import { AppDispatch } from "../../..";
import { downloadPhoto } from "../../../../api/profile/downloadPhoto";
import { uploadPhoto } from "../../../../api/profile/uploadPhoto";
import { updateProfileInfo } from "../../../../api/settings/updateProfileInfo";
import { updateProfileMain } from "../../../../api/settings/updateProfileMain";
import { filterEditObject } from "../../../../lib/controller/settings/filterEditObject";
import { isEmptyObj } from "../../../../lib/helper/isEmptyObj";
import { IGenericObject } from "../../../../lib/models/DefaultValue";
import { IUser } from "../../../../lib/models/IUser";
import { SettingsReducerActionCreators } from "./reducer_action_creator";

export const SettingsAsyncActionCreators = {
  setSettingsEditUser:
    (
      user: IUser,
      infoObject: IGenericObject,
      mainObject: IGenericObject,
      avatarFile: any,
      rewrite: () => void
    ) =>
    async (dispatch: AppDispatch) => {
      dispatch(SettingsReducerActionCreators.setSettingsEditLoaded(true));
      try {
        if (avatarFile !== null && avatarFile !== undefined) {
          await uploadPhoto(`userPhoto/${user.userID}`, avatarFile);
          const linkAvatar = await downloadPhoto(`userPhoto/${user.userID}`);
          mainObject.urlPhoto = linkAvatar;
        }
        const filterInfoObject = filterEditObject(infoObject);
        const filterMainObject = filterEditObject(mainObject);
        if (!isEmptyObj(filterInfoObject)) {
          await updateProfileInfo(user.userID, filterInfoObject, user.info);
        }
        if (!isEmptyObj(filterMainObject)) {
          await updateProfileMain(user.userID, filterMainObject, user);
        }
        dispatch(SettingsReducerActionCreators.setSettingsEditError(null));
        rewrite();
      } catch (e: any) {
        dispatch(SettingsReducerActionCreators.setSettingsEditError(e.message));
      } finally {
        dispatch(SettingsReducerActionCreators.setSettingsEditLoaded(false));
      }
    },
};
