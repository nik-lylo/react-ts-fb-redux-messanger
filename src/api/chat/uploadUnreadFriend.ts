import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

export async function uploadUnreadFriend(myId: string, selectedId: string) {
  try {
    const friendRef = doc(
      db,
      CollectionEnum.USERS,
      myId,
      CollectionEnum.FRIENDS,
      selectedId
    );
    await updateDoc(friendRef, { unread: 0 });
  } catch (e: any) {
    throw new Error("Error update unread field to friend!!!");
  }
}
