import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IGenericObject } from "../../lib/models/ICommon";
import { CollEnum } from "../../lib/utilits/AppEnum";
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
    const userDoc = doc(db, CollEnum.USERS, userID);
    await updateDoc(userDoc, { info: result });
  } catch (e: any) {
    throw new Error("Error update user info!!!");
  }
}
