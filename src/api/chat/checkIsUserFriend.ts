import { doc, getDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

export async function checkIsUserFriend(myId: string, selectedId: string) {
  try {
    const docRef = doc(
      db,
      CollectionEnum.USERS,
      selectedId,
      CollectionEnum.FRIENDS,
      myId
    );
    const snap = await getDoc(docRef);
    return snap.exists();
  } catch (e: any) {
    throw new Error("Error checking is user friend!!!");
  }
}
