import { IUser } from "../../../../lib/models/IUser";
import { ProfileActionEnum, SetIsUserInstalled, SetUser } from "../types";

export const ProfileReducerActionCreators = {
  setUser: (user: IUser): SetUser => ({
    type: ProfileActionEnum.SET_USER,
    payload: user,
  }),
  setIsUserInstalled: (flag: boolean): SetIsUserInstalled => ({
    type: ProfileActionEnum.SET_IS_USER_INSTALLED,
    payload: flag,
  }),
};
