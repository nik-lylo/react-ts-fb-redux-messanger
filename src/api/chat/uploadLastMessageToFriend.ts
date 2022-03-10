import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IMessage } from "../../lib/models/IMessage";
import { CollEnum } from "../../lib/utilits/AppEnum";
export async function uploadLastMessageToFriend(
  myId: string,
  selectedId: string,
  lastMessage: IMessage
) {
  try {
    const docRef = doc(db, CollEnum.USERS, selectedId, CollEnum.FRIENDS, myId);
    await updateDoc(docRef, {
      lastMessage: lastMessage,
    });
  } catch (e: any) {
    throw new Error("Error upload last message!!!");
  }
}
