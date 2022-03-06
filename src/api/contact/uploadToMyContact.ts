import { doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IUser } from "../../lib/models/IUser";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function uploadToMyContact(myId: string, contact: IUser) {
  try {
    const colRef = doc(
      db,
      CollEnum.USERS,
      myId,
      CollEnum.FRIENDS,
      contact.userID
    );
    await setDoc(colRef, contact);
  } catch (e: any) {
    throw new Error("Error uploading new contact to database!!!");
  }
}
