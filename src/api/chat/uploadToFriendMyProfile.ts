import { doc, setDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IFriends } from "../../lib/models/IFriends";

export async function uploadToFriendMyProfile(
  myFriend: IFriends,
  selectedId: string
) {
  try {
    const colRef = doc(
      db,
      CollectionEnum.USERS,
      selectedId,
      CollectionEnum.FRIENDS,
      myFriend.userID
    );
    await setDoc(colRef, myFriend);
  } catch (e: any) {
    throw new Error("Error uploading new contact to Friend database!!!");
  }
}
