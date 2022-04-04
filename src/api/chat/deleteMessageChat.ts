import { doc, deleteDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

export async function deleteMessageChat(
  myId: string,
  friendId: string,
  messageID: string
) {
  try {
    let docRef = doc(
      db,
      CollectionEnum.USERS,
      myId,
      CollectionEnum.FRIENDS,
      friendId,
      CollectionEnum.MESSAGES,
      messageID
    );
    await deleteDoc(docRef);
  } catch (e: any) {
    throw new Error("Error delete message");
  }
}
