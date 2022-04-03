import { doc, deleteDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

export async function uploadDeleteContact(myId: string, contactId: string) {
  try {
    const docRef = doc(
      db,
      CollectionEnum.USERS,
      myId,
      CollectionEnum.FRIENDS,
      contactId
    );
    console.log("delete");

    await deleteDoc(docRef);
  } catch (e: any) {
    throw new Error(
      "Database error. Failed to remove user from my contacts list"
    );
  }
}
