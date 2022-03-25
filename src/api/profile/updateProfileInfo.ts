import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IGenericObject } from "../../lib/models/DefaultValue";

export async function updateProfileInfo(
  userID: string,
  infoObject: IGenericObject,
  userInfoObject: IGenericObject
) {
  try {
    const result: IGenericObject = {};
    for (let key in userInfoObject) {
      if (infoObject[key] === undefined) {
        result[key] = userInfoObject[key];
      } else {
        result[key] = infoObject[key];
      }
    }
    const userDoc = doc(db, CollectionEnum.USERS, userID);
    await updateDoc(userDoc, { info: result });
  } catch (e: any) {
    throw new Error("Error update user info!!!");
  }
}
