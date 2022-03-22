import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IMessage } from "../../lib/models/IMessage";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function uploadMessageToGroup(
  selectedGroupId: string,
  message: IMessage
) {
  try {
    const docRef = collection(
      db,
      CollEnum.GROUPS,
      selectedGroupId,
      CollEnum.GMESSAGES
    );
    await addDoc(docRef, message);
  } catch (e: any) {
    throw new Error("Error upload message to group");
  }
}
