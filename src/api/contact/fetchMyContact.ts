import { collection, getDocs, query } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IFriends } from "../../lib/models/IFriends";

export async function fetchMyContact(myId: string) {
  try {
    const colChatRef = collection(
      db,
      CollectionEnum.USERS,
      myId,
      CollectionEnum.FRIENDS
    );
    const queryRef = query(colChatRef);
    const chatSnap = await getDocs(queryRef);
    const chatArray: IFriends[] = [];
    chatSnap.docs.forEach((it: any) => chatArray.push(it.data()));
    return chatArray;
  } catch (e: any) {
    throw new Error("Error loading my contacts from database");
  }
}
