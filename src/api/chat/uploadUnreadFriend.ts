import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function uploadUnreadFriend(myId: string, selectedId: string) {
  const friendRef = doc(db, CollEnum.USERS, myId, CollEnum.FRIENDS, selectedId);
  await updateDoc(friendRef, { unread: 0 });
}
