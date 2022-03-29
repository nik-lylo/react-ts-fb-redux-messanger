import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { AppDispatch } from "../../..";
import { CollectionEnum } from "../../../../lib/enum/collection/CollectionEnum";
import { db } from "../../../../lib/firebase";
import { dateFromCreatedAt } from "../../../../lib/helper/dateFromCreatedAt";
import {
  IMessageChat,
  IMessageGroupChat,
} from "../../../../lib/models/IMessage";
import { ChatReducerActionCreators } from "./reducer_action_creator";

export const ChatListenerActionCreators = {
  setListenerChatMessage:
    (userId: string, friendId: string) => (dispatch: AppDispatch) => {
      const collectionRef = collection(
        db,
        CollectionEnum.USERS,
        userId,
        CollectionEnum.FRIENDS,
        friendId,
        CollectionEnum.MESSAGES
      );

      const q = query(collectionRef, orderBy("createdAt"));
      onSnapshot(q, (snap) => {
        const array: IMessageChat[] = [];
        snap.forEach((doc: any) => {
          const date = dateFromCreatedAt(doc.data().createdAt);
          array.push({
            ...doc.data(),
            messageID: doc.id,
            time: date?.time,
            fullTime: date?.fulldate,
          });
        });
        dispatch(ChatReducerActionCreators.setChatMessageSnap(array));
      });
    },
  setListenerChatGroupMessage: (groupId: string) => (dispatch: AppDispatch) => {
    const collectionRef = collection(
      db,
      CollectionEnum.GROUPS,
      groupId,
      CollectionEnum.GMESSAGES
    );
    const q = query(collectionRef, orderBy("createdAt"));
    onSnapshot(q, (snap) => {
      const array: IMessageGroupChat[] = [];
      snap.forEach((doc: any) => {
        const date = dateFromCreatedAt(doc.data().createdAt);
        array.push({
          ...doc.data(),
          messageID: doc.id,
          time: date?.time,
          fullTime: date?.fulldate,
        });
      });
      dispatch(ChatReducerActionCreators.setChatGroupMessageSnap(array));
    });
  },
};
