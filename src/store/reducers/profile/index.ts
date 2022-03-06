import { IUser } from "../../../lib/models/IUser";
import { ProfileAction, ProfileEnum } from "./types";
const initialState = {} as IUser;

export default function profileReducer(
  state = initialState,
  action: ProfileAction
): IUser {
  switch (action.type) {
    case ProfileEnum.SET_NEW_USER:
      return { ...state, ...action.payload };
    case ProfileEnum.SET_PHOTO_URL:
      return { ...state, urlPhoto: action.payload };
    default:
      return state;
  }
}
