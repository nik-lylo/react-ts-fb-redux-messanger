import { IUser } from "../../../lib/models/IUser";
import { IProfileState, ProfileAction, ProfileEnum } from "./types";
const initialState: IProfileState = {
  user: {} as IUser,
  popupAvatarUpdateOpen: false,
  birthdayError: null,
  editError: null,
  editLoading: false,
};

export default function profileReducer(
  state = initialState,
  action: ProfileAction
): IProfileState {
  switch (action.type) {
    case ProfileEnum.SET_NEW_USER:
      return { ...state, user: action.payload };
    case ProfileEnum.SET_PHOTO_URL:
      return { ...state, user: { ...state.user, urlPhoto: action.payload } };
    case ProfileEnum.SET_BIRTHDAY_ERROR:
      return { ...state, birthdayError: action.payload };
    case ProfileEnum.SET_EDIT_ERROR:
      return { ...state, editError: action.payload };
    case ProfileEnum.SET_EDIT_LOADING:
      return { ...state, editLoading: action.payload };
    case ProfileEnum.SET_POPUP_AVATAR_UPDATE_OPEN:
      return { ...state, popupAvatarUpdateOpen: action.payload };
    default:
      return state;
  }
}
