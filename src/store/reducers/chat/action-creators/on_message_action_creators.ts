import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { AppDispatch } from "../../..";
import { db } from "../../../../lib/firebase";
import { IMessage } from "../../../../lib/models/IMessage";
import { CollEnum } from "../../../../lib/utilits/AppEnum";
import { ChatActionCreators } from "./reducer_action_creators";

export const OnMessageActionCreators = {
  setOnMessageSnapList:
    (myId: string, selectedId: string) => async (dispatch: AppDispatch) => {
      const collRef = collection(
        db,
        CollEnum.USERS,
        myId,
        CollEnum.USERS,
        selectedId,
        CollEnum.MESSAGES
      );
      const q = query(collRef, orderBy("createdAt"));
      onSnapshot(q, (snap) => {
        const array: IMessage[] = [];
        snap.forEach((doc: any) => {
          array.push({ ...doc.data(), messageID: doc.id });
        });
        dispatch(ChatActionCreators.setMessageSnapList(array));
      });
    },
};
