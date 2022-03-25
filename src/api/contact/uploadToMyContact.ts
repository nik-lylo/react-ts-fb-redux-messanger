import { doc, setDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IFriends } from "../../lib/models/IFriends";

export async function uploadContactToFriends(
  myId: string,
  contactId: string,
  contactObj: IFriends
) {
  try {
    const colRef = doc(
      db,
      CollectionEnum.USERS,
      myId,
      CollectionEnum.FRIENDS,
      contactId
    );
    await setDoc(colRef, contactObj);
  } catch (e: any) {
    throw new Error("Error uploading new contact to database!!!");
  }
}
