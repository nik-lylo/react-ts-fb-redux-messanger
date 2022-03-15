import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function uploadIsOnline(userId: string, flag: boolean) {
  try {
    const userRef = doc(db, CollEnum.USERS, userId);
    await updateDoc(userRef, { online: flag });
  } catch (e: any) {
    throw new Error(e.message);
  }
}
