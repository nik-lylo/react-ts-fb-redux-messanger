import { collection, onSnapshot, query } from "firebase/firestore";
import { AppDispatch } from "../../..";
import { db } from "../../../../lib/firebase";
import { IGroup } from "../../../../lib/models/IGroup";
import { CollEnum } from "../../../../lib/utilits/AppEnum";
import { GroupActionCreators } from "./reducer_action_creators";

export const OnGroupActionCreators = {
  setOnGroupSnapList: () => (dispatch: AppDispatch) => {
    const collRef = collection(db, CollEnum.GROUPS);
    const q = query(collRef);
    onSnapshot(q, (snap) => {
      const array: IGroup[] = [];
      snap.forEach((doc: any) => {
        array.push(doc.data());
      });
      dispatch(GroupActionCreators.setGroupSnapList(array));
    });
  },
};
