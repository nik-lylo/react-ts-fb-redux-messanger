import { IGenericObject } from "../../models/ICommon";

export function filterCreateObject(createObj: IGenericObject) {
  const result: IGenericObject = {};
  for (let key in createObj) {
    if (createObj[key] === "") {
      result[key] = null;
    } else {
      result[key] = createObj[key];
    }
  }
  return result;
}
