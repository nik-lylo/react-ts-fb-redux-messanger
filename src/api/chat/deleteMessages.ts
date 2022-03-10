import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IMessage } from "../../lib/models/IMessage";
import { CollEnum } from "../../lib/utilits/AppEnum";
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
          CollEnum.USERS,
          myId,
          CollEnum.FRIENDS,
          friendId,
          CollEnum.MESSAGES,
          mess.messageID
        );
        await deleteDoc(docRef);
      }
    });
  } catch (e: any) {
    throw new Error("Error delete message");
  }
}
