import { IGroupMember, IGroupObject } from "../../models/IGroup";
import { IUser } from "../../models/IUser";

export function filterInvitingGroupList(
  groupObjectList: IGroupObject,
  myId: string,
  selectedGroup: string | null,
  contact: IUser
) {
  if (selectedGroup === null) {
    if (contact.userID === myId) return true;
    return false;
  }

  const memberGroupId = groupObjectList[selectedGroup].members.map(
    (it: IGroupMember) => it.userId
  );

  if (contact.userID === myId) return true;

  if (memberGroupId.includes(contact.userID)) {
    return true;
  }
  if (groupObjectList[selectedGroup].inviting.includes(contact.userID)) {
    return true;
  }
  return false;
}
