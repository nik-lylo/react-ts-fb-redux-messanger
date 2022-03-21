import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IUser } from "../../lib/models/IUser";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function updateUserInvitationToGroupAdd(
  invitedFriends: IUser[],
  groupId: string
) {
  try {
    invitedFriends.map(async (item: IUser) => {
      const docRef = doc(db, CollEnum.USERS, item.userID);
      await updateDoc(docRef, { invitationToGroup: arrayUnion(groupId) });
    });
  } catch (e: any) {
    throw new Error("Error update user array!!!");
  }
}
