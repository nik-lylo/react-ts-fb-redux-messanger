import { IGroup } from "../../models/IGroup";

export function filterGroupByString(
  groupArray: IGroup[],
  subStr: string
): IGroup[] {
  if (subStr === "") {
    return groupArray;
  }
  const upperStr = subStr.toLowerCase().trim();
  const result = groupArray.filter((item: IGroup) =>
    item.name.toLowerCase().includes(upperStr)
  );
  return result;
}
