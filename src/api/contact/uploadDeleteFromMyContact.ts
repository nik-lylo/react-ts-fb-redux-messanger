import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { CollEnum } from "../../lib/utilits/AppEnum";
export async function uploadDeleteFromMyContact(
  myId: string,
  contactId: string
) {
  try {
    const docRef = doc(db, CollEnum.USERS, myId, CollEnum.FRIENDS, contactId);
    await deleteDoc(docRef);
  } catch (e: any) {
    throw new Error(
      "Database error. Failed to remove user from my contacts list"
    );
  }
}
