import { doc, deleteDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IMessage } from "../../lib/models/IMessage";

export async function deleteMessages(
  myId: string,
  friendId: string,
  messages: IMessage[]
) {
  try {
    messages.forEach(async (mess: IMessage) => {
      if (mess.messageID) {
        let docRef = doc(
          db,
          CollectionEnum.USERS,
          myId,
          CollectionEnum.FRIENDS,
          friendId,
          CollectionEnum.MESSAGES,
          mess.messageID
        );
        await deleteDoc(docRef);
      }
    });
  } catch (e: any) {
    throw new Error("Error delete message");
  }
}
