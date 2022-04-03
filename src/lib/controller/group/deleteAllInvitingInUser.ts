import { arrayRemove, doc, updateDoc } from "firebase/firestore";

import { CollectionEnum } from "../../enum/collection/CollectionEnum";
import { db } from "../../firebase";
import { IGroup } from "../../models/IGroup";

export async function deleteAllInvitingInUser(group: IGroup) {
  if (group.inviting.length === 0) return;
  try {
    group.inviting.map(async (item: string) => {
      const docRef = doc(db, CollectionEnum.USERS, item);
      const invitationUpdate = {
        invitationToGroup: arrayRemove(group.groupId),
      };
      await updateDoc(docRef, invitationUpdate);
    });
  } catch (e: any) {
    console.log(e.message);
    throw new Error("Error delete inviting list in user");
  }
}
