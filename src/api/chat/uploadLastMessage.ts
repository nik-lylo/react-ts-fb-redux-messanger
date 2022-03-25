import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IMessage } from "../../lib/models/IMessage";

export async function uploadLastMessage(
  myId: string,
  selectedId: string,
  lastMessage: IMessage
) {
  try {
    const docRef = doc(
      db,
      CollectionEnum.USERS,
      myId,
      CollectionEnum.FRIENDS,
      selectedId
    );
    await updateDoc(docRef, {
      lastMessage: lastMessage,
    });
  } catch (e: any) {
    throw new Error("Error upload last message!!!");
  }
}
