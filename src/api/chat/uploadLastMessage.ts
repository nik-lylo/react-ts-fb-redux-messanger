import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IMessage } from "../../lib/models/IMessage";
import { CollEnum } from "../../lib/utilits/AppEnum";
export async function uploadLastMessage(
  myId: string,
  selectedId: string,
  lastMessage: IMessage
) {
  try {
    const docRef = doc(db, CollEnum.USERS, myId, CollEnum.FRIENDS, selectedId);
    await updateDoc(docRef, {
      lastMessage: lastMessage,
    });
  } catch (e: any) {
    throw new Error("Error upload last message!!!");
  }
}
