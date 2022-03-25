import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

export async function updateGroup(groupId: string, groupObject: any) {
  try {
    const docRef = doc(db, CollectionEnum.GROUPS, groupId);
    await updateDoc(docRef, groupObject);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
