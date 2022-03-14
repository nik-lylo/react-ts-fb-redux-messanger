import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IGenericObject } from "../../lib/models/ICommon";
import { CollEnum } from "../../lib/utilits/AppEnum";

export async function updateProfileMain(
  userID: string,
  mainObject: IGenericObject,
  userMainObject: IGenericObject
) {
  try {
    console.log(mainObject);
    const result: IGenericObject = {};
    const userRef = doc(db, CollEnum.USERS, userID);
    if (userMainObject.name === undefined) {
      result.name = mainObject.name;
    } else {
      result.name = userMainObject.name;
    }
    if (userMainObject.lastname === undefined) {
      result.lastname = mainObject.lastname;
    } else {
      result.lastname = userMainObject.lastname;
    }
    result.fullname = `${result.name} ${result.lastname}`;
    console.log(result, "result");
    await updateDoc(userRef, result);
  } catch (e: any) {
    throw new Error("Error main update user!!!");
  }
}
