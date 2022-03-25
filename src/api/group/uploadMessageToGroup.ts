import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IMessage } from "../../lib/models/IMessage";

export async function uploadMessageToGroup(
  selectedGroupId: string,
  message: IMessage
) {
  try {
    const docRef = collection(
      db,
      CollectionEnum.GROUPS,
      selectedGroupId,
      CollectionEnum.GMESSAGES
    );
    await addDoc(docRef, message);
  } catch (e: any) {
    throw new Error("Error upload message to group");
  }
}
