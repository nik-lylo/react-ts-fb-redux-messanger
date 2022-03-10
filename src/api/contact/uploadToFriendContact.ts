import { doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IUser } from "../../lib/models/IUser";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function uploadToFriendContact(
  myProfile: IUser,
  selectedId: string
) {
  console.log(myProfile);
  try {
    const colRef = doc(
      db,
      CollEnum.USERS,
      selectedId,
      CollEnum.FRIENDS,
      myProfile.userID
    );
    await setDoc(colRef, myProfile);
  } catch (e: any) {
    throw new Error("Error uploading new contact to Friend database!!!");
  }
}
