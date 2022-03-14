import { IGenericObject } from "../../models/ICommon";

export function filterEditObject(info: IGenericObject): IGenericObject {
  const newObject: IGenericObject = {};
  for (let key in info) {
    if (info[key] !== "") {
      newObject[key] = info[key];
    }
  }
  return newObject;
}
