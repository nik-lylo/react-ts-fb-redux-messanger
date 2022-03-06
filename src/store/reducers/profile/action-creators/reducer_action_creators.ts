import { IUser } from "../../../../lib/models/IUser";
import { SetNewUser, SetPhotoUrl, ProfileEnum } from "../types";

export const ProfileActionCreators = {
  setNewUser: (userObj: IUser): SetNewUser => ({
    type: ProfileEnum.SET_NEW_USER,
    payload: userObj,
  }),
  setNewPhotoUrl: (url: string): SetPhotoUrl => ({
    type: ProfileEnum.SET_PHOTO_URL,
    payload: url,
  }),
};
