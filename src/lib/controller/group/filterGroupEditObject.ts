import { IGenericObject } from "../../models/DefaultValue";

export function filterGroupEditObject(editObj: IGenericObject) {
  const result: IGenericObject = {};
  for (let key in editObj) {
    if (editObj[key] === "") {
      continue;
    } else {
      result[key] = editObj[key];
    }
  }

  return result;
}
