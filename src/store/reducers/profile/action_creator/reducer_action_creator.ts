import { IUser } from "../../../../lib/models/IUser";
import { ProfileActionEnum, SetUser } from "../types";

export const ProfileReducerActionCreators = {
  setUser: (user: IUser): SetUser => ({
    type: ProfileActionEnum.SET_USER,
    payload: user,
  }),
};
