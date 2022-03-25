import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IGenericObject } from "../../lib/models/DefaultValue";


export async function updateProfileMain(
  userID: string,
  mainObject: IGenericObject,
  userMainObject: IGenericObject
) {
  try {
    console.log(mainObject);
    const result: IGenericObject = {};
    const userRef = doc(db, CollectionEnum.USERS, userID);
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
