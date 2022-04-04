import { deleteDoc, doc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

export async function deleteMessageGroup(groupId: string, messageId: string) {
  try {
    const docRef = doc(
      db,
      CollectionEnum.GROUPS,
      groupId,
      CollectionEnum.GMESSAGES,
      messageId
    );
    await deleteDoc(docRef);
  } catch (e: any) {
    throw new Error("Error delete doc from GMessage collection");
  }
}
