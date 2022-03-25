import { IGroup, IGroupObject } from "../../models/IGroup";

export function filterGroupCollectionsByMyGroup(
  groupCollectionList: IGroupObject,
  myGroup: string[]
) {
  const result: IGroup[] = [];
  if (myGroup.length === 0) {
    return Object.values(groupCollectionList);
  }
  const key: string[] = Object.keys(groupCollectionList);
  const filter = key.filter((it: string) => {
    if (myGroup.includes(it)) {
      return false;
    } else {
      return true;
    }
  });

  filter.forEach((item: string) => result.push(groupCollectionList[item]));
  return result;
}
