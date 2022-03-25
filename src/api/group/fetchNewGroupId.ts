import { addDoc, collection } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

export async function fetchNewGroupId() {
  try {
    const docRef = collection(db, CollectionEnum.GROUPS);
    const groupId = await addDoc(docRef, { name: "test" });
    return groupId.id;
  } catch (e: any) {
    throw new Error(e.message);
  }
}
