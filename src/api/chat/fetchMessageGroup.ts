import { collection, getDocs, query } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IMessageGroupChat } from "../../lib/models/IMessage";

export async function fetchMessageGroup(groupId: string) {
  try {
    const collRef = collection(
      db,
      CollectionEnum.GROUPS,
      groupId,
      CollectionEnum.GMESSAGES
    );
    const result: IMessageGroupChat[] = [];
    const q = query(collRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc: any) => {
      result.push({ ...doc.data(), messageID: doc.id });
    });
    return result;
  } catch (e: any) {
    throw new Error("Error fetch all message from group");
  }
}
