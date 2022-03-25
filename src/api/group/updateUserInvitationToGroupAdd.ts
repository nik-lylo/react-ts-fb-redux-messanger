import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IUser } from "../../lib/models/IUser";

export async function updateUserInvitationToGroupAdd(
  invitedFriends: IUser[],
  groupId: string
) {
  try {
    invitedFriends.map(async (item: IUser) => {
      const docRef = doc(db, CollectionEnum.USERS, item.userID);
      await updateDoc(docRef, { invitationToGroup: arrayUnion(groupId) });
    });
  } catch (e: any) {
    throw new Error("Error update user array!!!");
  }
}
