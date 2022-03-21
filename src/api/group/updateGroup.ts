import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function updateGroup(groupId: string, groupObject: any) {
  try {
    const docRef = doc(db, CollEnum.GROUPS, groupId);
    await updateDoc(docRef, groupObject);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
