import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { AppDispatch } from "../../..";
import { db } from "../../../../lib/firebase";
import { dateFromCreatedAt } from "../../../../lib/helper/dateFromCreatedAt";
import { IMessage } from "../../../../lib/models/IMessage";
import { IUser } from "../../../../lib/models/IUser";
import { CollEnum } from "../../../../lib/utilits/AppEnum";
import { ChatActionCreators } from "./reducer_action_creators";

export const OnActionCreators = {
  setOnMessageSnapList:
    (myId: string, selectedId: string) => async (dispatch: AppDispatch) => {
      const collRef = collection(
        db,
        CollEnum.USERS,
        myId,
        CollEnum.FRIENDS,
        selectedId,
        CollEnum.MESSAGES
      );
      const q = query(collRef, orderBy("createdAt"));
      onSnapshot(q, (snap) => {
        const array: IMessage[] = [];
        snap.forEach((doc: any) => {
          if (doc.data().createdAt === null) return;
          const dateToday = dateFromCreatedAt(doc.data().createdAt);
          array.push({
            ...doc.data(),
            messageID: doc.id,
            time: dateToday?.time,
            fullTime: dateToday?.fulldate,
          });
        });
        dispatch(ChatActionCreators.setMessageSnapList(array));
      });
    },

  setOnChatSnapList: (myId: string) => async (dispatch: AppDispatch) => {
    const collRef = collection(db, CollEnum.USERS, myId, CollEnum.FRIENDS);
    const q = query(collRef);
    onSnapshot(q, (snap) => {
      const array: IUser[] = [];
      snap.forEach((doc: any) => {
        if (doc.data().lastMessage.createdAt === null) {
          return;
        }
        array.push(doc.data());
      });
      dispatch(ChatActionCreators.setMyChatSnapList(array));
    });
  },
};
