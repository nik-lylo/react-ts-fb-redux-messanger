import { IGroupObject } from "../../models/IGroup";
import { GroupRoleType } from "../../type/role";

export function checkRoleInGroup(
  selectedGroupId: string,
  myId: string,
  groupObjectList: IGroupObject
): GroupRoleType {
  const group = groupObjectList[selectedGroupId];

  if (group.admin === myId) {
    return "admin";
  }
  const groupMemberId = group.members.map((it) => it.userId);
  if (groupMemberId.includes(myId)) {
    return "member";
  }
  if (group.inviting.includes(myId)) {
    return "inviting";
  }
  return "guest";
}
