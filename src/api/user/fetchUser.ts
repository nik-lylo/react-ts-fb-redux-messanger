import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export async function fetchUser(userId: string) {
  try {
    const userFromId = await getDoc(doc(db, "Users", userId));
    return userFromId;
  } catch (e: any) {
    throw new Error("Error loading user from database!!!");
  }
}
