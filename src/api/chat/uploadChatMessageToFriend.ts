import { collection, addDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IMessageChat } from "../../lib/models/IMessage";

export async function uploadChatMessageToFriend(
  messageObj: IMessageChat,
  selectedId: string
) {
  try {
    const collRef = collection(
      db,
      CollectionEnum.USERS,
      selectedId,
      CollectionEnum.FRIENDS,
      messageObj.fromID,
      CollectionEnum.MESSAGES
    );
    await addDoc(collRef, messageObj);
  } catch (e: any) {
    throw new Error("Error upload message to DB");
  }
}
