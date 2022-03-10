import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IMessage } from "../../lib/models/IMessage";
import { CollEnum } from "../../lib/utilits/AppEnum";
export async function fetchMessages(myId: string, deletedId: string) {
  try {
    const collRef = collection(
      db,
      CollEnum.USERS,
      myId,
      CollEnum.FRIENDS,
      deletedId,
      CollEnum.MESSAGES
    );
    const result: IMessage[] = [];
    const q = query(collRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc: any) => {
      result.push({ ...doc.data(), messageID: doc.id });
    });
    return result;
  } catch (e: any) {
    throw new Error("Error download messege from DB");
  }
}
