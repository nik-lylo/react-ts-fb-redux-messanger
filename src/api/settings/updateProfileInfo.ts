import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IGenericObject } from "../../lib/models/DefaultValue";

export async function updateProfileInfo(
  userID: string,
  newInfoObject: IGenericObject,
  oldInfoObject: IGenericObject
) {
  try {
    const result: IGenericObject = {};
    for (let key in oldInfoObject) {
      if (newInfoObject[key] === undefined) {
        result[key] = oldInfoObject[key];
      } else {
        result[key] = newInfoObject[key];
      }
    }
    const userDoc = doc(db, CollectionEnum.USERS, userID);
    await updateDoc(userDoc, { info: result });
  } catch (e: any) {
    throw new Error("Error update user info!!!");
  }
}
