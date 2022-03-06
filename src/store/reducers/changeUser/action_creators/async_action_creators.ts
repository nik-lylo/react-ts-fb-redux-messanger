import { AppDispatch } from "../../..";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../../lib/firebase";
import { ChangeUserActionCreators } from "./action_creator";
import { ProfileActionCreators } from "../../profile/action-creators/reducer_action_creators";
import { uploadUpdateUser } from "../../../../api/user/uploadUpdateUser";
import { uploadPhoto } from "../../../../api/profile/uploadPhoto";

export const ChangeAsyActCrea = {
  setChangeUserPhoto:
    (userId: string, file: any) => async (dispatch: AppDispatch) => {
      dispatch(ChangeUserActionCreators.setChangeIsLoading(true));
    },
};
function storageRef(storageRef: any) {
  throw new Error("Function not implemented.");
}
