import { deleteDoc, doc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

export async function deleteGroup(groupId: string) {
  try {
    const groupRef = doc(db, CollectionEnum.GROUPS, groupId);
    await deleteDoc(groupRef);
  } catch (e: any) {
    console.log(e.message);

    throw new Error("Error delete group");
  }
}
