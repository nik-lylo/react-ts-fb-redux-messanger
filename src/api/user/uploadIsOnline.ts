import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

export async function uploadIsOnline(userId: string, flag: boolean) {
  try {
    const userRef = doc(db, CollectionEnum.USERS, userId);
    await updateDoc(userRef, { online: flag });
  } catch (e: any) {
    throw new Error(e.message);
  }
}
