import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export async function uploadUpdateUser(userId: string, obj: {}) {
  try {
    const userUrlRef = doc(db, "Users", userId);
    await updateDoc(userUrlRef, obj);
  } catch (e: any) {
    console.log(e.message);

    throw new Error("Error update user!!!");
  }
}
