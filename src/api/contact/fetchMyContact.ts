import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IUser } from "../../lib/models/IUser";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function fetchMyContact(myId: string) {
  try {
    const colChatRef = collection(db, CollEnum.USERS, myId, CollEnum.FRIENDS);
    const queryRef = query(colChatRef);
    const chatSnap = await getDocs(queryRef);
    const chatArray: IUser[] = [];
    chatSnap.docs.forEach((it: any) => chatArray.push(it.data()));
    return chatArray;
  } catch (e: any) {
    throw new Error("Error loading my contacts from database");
  }
}
