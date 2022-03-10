import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function checkIsUserFriend(myId: string, selectedId: string) {
  try {
    const docRef = doc(db, CollEnum.USERS, selectedId, CollEnum.FRIENDS, myId);
    const snap = await getDoc(docRef);
    return snap.exists();
  } catch (e: any) {
    throw new Error("Error checking is user friend!!!");
  }
}
