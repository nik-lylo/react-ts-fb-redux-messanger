import { IGenericObject } from "../../models/ICommon";

export function filterBirthdayObject(birthday: IGenericObject) {
  let sum = 0;
  for (let key in birthday) {
    if (birthday[key] !== "") {
      sum = sum + 1;
    }
  }
  return sum;
}
