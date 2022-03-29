import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IMessageChat } from "../../lib/models/IMessage";

export async function uploadLastChatMessage(
  selectedId: string,
  lastMessage: IMessageChat
) {
  try {
    const docRef = doc(
      db,
      CollectionEnum.USERS,
      lastMessage.fromID,
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
