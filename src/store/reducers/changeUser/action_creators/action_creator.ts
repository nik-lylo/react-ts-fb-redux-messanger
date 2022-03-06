import { IUser } from "../../../../lib/models/IUser";
import {
  ChangeUserEnum,
  SetAddPhotoModal,
  SetChangeError,
  SetChangeIsLoading,
} from "../types";

export const ChangeUserActionCreators = {
  setAddPhotoModal: (payload: boolean): SetAddPhotoModal => ({
    type: ChangeUserEnum.SET_ADDPHOTO_MODAL,
    payload,
  }),
  setChangeIsLoading: (payload: boolean): SetChangeIsLoading => ({
    type: ChangeUserEnum.SET_CHANGE_LOADING,
    payload,
  }),
  setChangeError: (message: string | null): SetChangeError => ({
    type: ChangeUserEnum.SET_CHANGE_ERROR,
    payload: message,
  }),
};
