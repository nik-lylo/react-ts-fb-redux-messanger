import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function fetchNewGroupId() {
  const docRef = collection(db, CollEnum.GROUPS);
  const groupId = await addDoc(docRef, { name: "test" });
  return groupId.id;
}
