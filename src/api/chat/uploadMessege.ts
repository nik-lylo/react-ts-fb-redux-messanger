import { collection, addDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IMessage } from "../../lib/models/IMessage";

export async function uploadMessage(messageObj: IMessage, selectedId: string) {
  try {
    const collRef = collection(
      db,
      CollectionEnum.USERS,
      messageObj.fromID,
      CollectionEnum.FRIENDS,
      selectedId,
      CollectionEnum.MESSAGES
    );
    await addDoc(collRef, messageObj);
  } catch (e: any) {
    throw new Error("Error upload message to DB");
  }
}
