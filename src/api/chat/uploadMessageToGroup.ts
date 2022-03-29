import { addDoc, collection } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IMessageGroupChat } from "../../lib/models/IMessage";

export async function uploadMessageToGroup(
  message: IMessageGroupChat,
  selectedChatGroup: string
) {
  try {
    const collectionRef = collection(
      db,
      CollectionEnum.GROUPS,
      selectedChatGroup,
      CollectionEnum.GMESSAGES
    );
    await addDoc(collectionRef, message);
  } catch (e: any) {
    throw new Error("Error upload message to group!!!");
  }
}
