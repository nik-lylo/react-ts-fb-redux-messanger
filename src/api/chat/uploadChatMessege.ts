import { collection, addDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IMessageChat } from "../../lib/models/IMessage";

export async function uploadChatMessage(
  message: IMessageChat,
  selectedId: string
) {
  try {
    const collRef = collection(
      db,
      CollectionEnum.USERS,
      message.fromID,
      CollectionEnum.FRIENDS,
      selectedId,
      CollectionEnum.MESSAGES
    );
    await addDoc(collRef, message);
  } catch (e) {
    throw new Error("Error upload chat message!!!");
  }
}
