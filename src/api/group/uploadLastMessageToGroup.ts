import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IGroup } from "../../lib/models/IGroup";

export async function updateGroup(selectedGroupId: IGroup, uploadObj: any) {
  try {
    const docRef = doc(db, CollectionEnum.GROUPS, selectedGroupId.groupId);
    await updateDoc(docRef, uploadObj);
  } catch (e: any) {
    throw new Error("Error updating Group");
  }
}
