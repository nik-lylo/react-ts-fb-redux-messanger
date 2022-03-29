import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

import { IMessageGroupChat } from "../../lib/models/IMessage";

export async function uploadLastMessageToGroup(
  selectedGroupId: string,
  lastMessage: IMessageGroupChat
) {
  try {
    const docRef = doc(db, CollectionEnum.GROUPS, selectedGroupId);
    await updateDoc(docRef, { lastMessage });
  } catch (e: any) {
    throw new Error("Error upload last message to group");
  }
}
