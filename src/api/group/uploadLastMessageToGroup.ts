import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IGroup } from "../../lib/models/IGroup";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function updateGroup(selectedGroupId: IGroup, uploadObj: any) {
  try {
    const docRef = doc(db, CollEnum.GROUPS, selectedGroupId.groupId);
    await updateDoc(docRef, uploadObj);
  } catch (e: any) {
    throw new Error("Error updating Group");
  }
}
