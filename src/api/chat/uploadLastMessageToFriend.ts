import { doc, getDoc, updateDoc } from "firebase/firestore";
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
    const friendDoc = await getDoc(docRef);
    await updateDoc(docRef, {
      lastMessage: lastMessage,
      unread: friendDoc.data()!.unread + 1,
    });
  } catch (e: any) {
    throw new Error("Error upload last message!!!");
  }
}
