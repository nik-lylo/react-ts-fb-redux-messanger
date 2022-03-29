import { doc, updateDoc } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";
import { IGenericObject } from "../../lib/models/DefaultValue";

export async function updateProfileMain(
  userID: string,
  newMainObject: IGenericObject,
  oldMainObject: IGenericObject
) {
  try {
    const result: IGenericObject = {};

    if (newMainObject.name === undefined) {
      result.name = oldMainObject.name;
    } else {
      result.name = newMainObject.name;
    }
    if (newMainObject.lastname === undefined) {
      result.lastname = oldMainObject.lastname;
    } else {
      result.lastname = newMainObject.lastname;
    }
    if (newMainObject.urlPhoto !== undefined) {
      result.urlPhoto = newMainObject.urlPhoto;
    }

    const userRef = doc(db, CollectionEnum.USERS, userID);
    result.fullname = `${result.name} ${result.lastname}`;
    console.log(result);
    await updateDoc(userRef, result);
  } catch (e: any) {
    throw new Error("Error main update user!!!");
  }
}
