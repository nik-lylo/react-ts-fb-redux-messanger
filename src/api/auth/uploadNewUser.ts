import { doc, setDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IUser } from "../../lib/models/IUser";

export async function uploadNewUser(newUser: IUser, newUserId: string) {
  try {
    await setDoc(doc(db, CollectionEnum.USERS, newUserId), newUser);
  } catch (e: any) {
    throw new Error("Error loading new user into database");
  }
}
