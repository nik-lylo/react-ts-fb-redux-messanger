import { collection, getDocs, query } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IUser } from "../../lib/models/IUser";

export async function fetchGlobalContact() {
  try {
    const q = query(collection(db, CollectionEnum.USERS));
    const querySnapshot = await getDocs(q);
    const result: IUser[] = [];
    querySnapshot.docs.map((item: any) => {
      result.push(item.data());
    });
    return result;
  } catch (e: any) {
    throw new Error("Error loading contacts from database");
  }
}
