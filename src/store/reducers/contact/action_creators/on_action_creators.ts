import { collection, onSnapshot, query } from "firebase/firestore";
import { AppDispatch } from "../../..";
import { db } from "../../../../lib/firebase";
import { IUser } from "../../../../lib/models/IUser";
import { CollEnum } from "../../../../lib/utilits/AppEnum";
import { ContactActionCreators } from "./reducer_action_creator";

export const OnContactActionCreators = {
  setOnContactSnapList: () => (dispatch: AppDispatch) => {
    const collRef = collection(db, CollEnum.USERS);
    const q = query(collRef);
    onSnapshot(q, (snap) => {
      const array: IUser[] = [];
      snap.forEach((doc: any) => {
        array.push(doc.data());
      });
      dispatch(ContactActionCreators.setContactSnapList(array));
    });
  },
};
