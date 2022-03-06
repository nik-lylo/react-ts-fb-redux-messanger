import { doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IUser } from "../../lib/models/IUser";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function uploadNewUser(newUser: IUser, newUserId: string) {
  try {
    await setDoc(doc(db, CollEnum.USERS, newUserId), newUser);
  } catch (e: any) {
    throw new Error("Error loading new user into database");
  }
}
