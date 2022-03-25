import { IUser } from "../../models/IUser";

export function filterContactUserByString(
  subStr: string,
  array: IUser[]
): IUser[] {
  const upperStr = subStr.toLowerCase().trim();
  if (subStr === "") {
    return array;
  }
  const result = array.filter((item) =>
    item.fullname.toLowerCase().includes(upperStr)
  );

  return result;
}
