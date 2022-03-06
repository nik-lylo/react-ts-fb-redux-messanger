import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IUser } from "../../lib/models/IUser";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function fetchGlobalContact() {
  try {
    const q = query(collection(db, CollEnum.USERS));
    const querySnapshot = await getDocs(q);
    const result: IUser[] = [];
    querySnapshot.docs.map((item: any) => {
      result.push(item.data());
    });
    return result as IUser[];
  } catch (e: any) {
    throw new Error("Error loading contacts from database");
  }
}
