import { IUser } from "../../../lib/models/IUser";
import { IProfileState, ProfileAction, ProfileActionEnum } from "./types";

const initialState: IProfileState = {
  user: {} as IUser,
};

export default function profileReducer(
  state = initialState,
  action: ProfileAction
): IProfileState {
  switch (action.type) {
    case ProfileActionEnum.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
