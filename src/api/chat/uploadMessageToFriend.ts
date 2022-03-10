import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IMessage } from "../../lib/models/IMessage";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function uploadMessageToFriend(
  messageObj: IMessage,
  selectedId: string
) {
  try {
    const collRef = collection(
      db,
      CollEnum.USERS,
      selectedId,
      CollEnum.FRIENDS,
      messageObj.fromID,
      CollEnum.MESSAGES
    );
    await addDoc(collRef, messageObj);
  } catch (e: any) {
    throw new Error("Error upload message to DB");
  }
}
