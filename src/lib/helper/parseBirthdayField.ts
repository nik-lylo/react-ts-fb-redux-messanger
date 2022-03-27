import { IBirthday, IUserObject } from "../models/IUser";

export function parseBirthdayField(birth: null | IBirthday) {
  if (birth === null) return null;

  const result: string = `${birth.date}-${birth.month}-${birth.year}`;
  return result;
}
