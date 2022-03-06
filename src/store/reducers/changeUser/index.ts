import { IUser } from "../../../lib/models/IUser";
import { ChangeUserAction, ChangeUserEnum, IChangeUserState } from "./types";

const initState: IChangeUserState = {
  openAddPhoto: false,
  isChangeLoading: false,
  changeError: null,
};

export default function changeUserReducer(
  state = initState,
  action: ChangeUserAction
): IChangeUserState {
  switch (action.type) {
    case ChangeUserEnum.SET_ADDPHOTO_MODAL:
      return { ...state, openAddPhoto: action.payload };
    case ChangeUserEnum.SET_CHANGE_LOADING:
      return { ...state, isChangeLoading: action.payload };
    case ChangeUserEnum.SET_CHANGE_ERROR:
      return { ...state, changeError: action.payload };

    default:
      return state;
  }
}
