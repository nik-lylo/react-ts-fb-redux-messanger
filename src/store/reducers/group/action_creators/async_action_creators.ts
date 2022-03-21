import { AppDispatch } from "../../..";
import { fetchNewGroupId } from "../../../../api/group/fetchNewGroupId";
import { filterCreateObject } from "../../../../lib/controlFunc/group/filterCreateObject";
import { IGenericObject } from "../../../../lib/models/ICommon";
import { uploadPhoto } from "../../../../api/profile/uploadPhoto";
import { downloadPhoto } from "../../../../api/profile/downloadPhoto";
import { DefaultValue } from "../../../../lib/models/DefaultValue";
import { updateGroup } from "../../../../api/group/updateGroup";
import { GroupActionCreators } from "./reducer_action_creators";
import { IUser } from "../../../../lib/models/IUser";
import { IGroup, IGroupMember } from "../../../../lib/models/IGroup";
import { updateUserInvitationToGroupAdd } from "../../../../api/group/updateUserInvitationToGroupAdd";
import { arrayUnion } from "firebase/firestore";
import { uploadUpdateUser } from "../../../../api/user/uploadUpdateUser";

export const AsyncGroupActionCreators = {
  setCreateGroup:
    (
      createObj: IGenericObject,
      avatarFile: any,
      invitedFriends: IUser[],
      rewrite: () => void,
      setStep: any
    ) =>
    async (dispatch: AppDispatch) => {
      dispatch(GroupActionCreators.setGroupIsLoading(true));
      try {
        const filteredCreateObj: any = filterCreateObject(createObj);
        const groupId = await fetchNewGroupId();
        let photoUrl: string = DefaultValue.GROUP__IMAGE;
        if (avatarFile !== null) {
          await uploadPhoto(`groupsPhoto/${groupId}.png`, avatarFile);
          photoUrl = await downloadPhoto(`groupsPhoto/${groupId}.png`);
        }
        filteredCreateObj.groupId = groupId;
        filteredCreateObj.groupAvatar = photoUrl;

        const groupObject: IGroup = {
          groupId: groupId,
          groupAvatar: photoUrl,
          ...filteredCreateObj,
        };
        await updateGroup(groupId, groupObject);
        await uploadUpdateUser(groupObject.admin, {
          myGroup: arrayUnion(groupId),
        });
        updateUserInvitationToGroupAdd(invitedFriends, groupId);
        rewrite();
        dispatch(GroupActionCreators.setOpenPopupCreateGroup(false));
        setTimeout(() => {
          setStep(1);
        }, 500);
      } catch (e: any) {
        dispatch(GroupActionCreators.setCreateGroupError(e.message));
      } finally {
        dispatch(GroupActionCreators.setGroupIsLoading(false));
      }
    },
  setAcceptUserToGroup:
    (
      user: IUser,
      group: IGroup,
      handleCloseCard: () => void,
      snackBarOpen: (
        text: string,
        status: "success" | "error" | "info" | "warning"
      ) => void
    ) =>
    async (dispatch: AppDispatch) => {
      try {
        const invitingFiltered: string[] = group.inviting.filter(
          (item: string) => item !== user.userID
        );
        const invitationToGroupfiltered: string[] =
          user.invitationToGroup.filter(
            (item: string) => item !== group.groupId
          );

        const memberObject: IGroupMember = {
          userId: user.userID,
          joined: new Date(),
        };
        const objUpdateGroup = {
          inviting: invitingFiltered,
          members: [...group.members, memberObject],
          member_amount: group.member_amount + 1,
        };
        const objUpdateUser = {
          invitationToGroup: invitationToGroupfiltered,
          myGroup: [...user.myGroup, group.groupId],
        };
        await updateGroup(group.groupId, objUpdateGroup);
        snackBarOpen(
          "You have accepted an invitation to this group. And now you are a member",
          "success"
        );
        handleCloseCard();
        setTimeout(async () => {
          await uploadUpdateUser(user.userID, objUpdateUser);
        }, 1000);
      } catch (e: any) {
        console.log(e.message);
      }
    },
  setRejectUserToGroup:
    (
      user: IUser,
      group: IGroup,
      handleCloseCard: () => void,
      snackBarOpen: (
        text: string,
        status: "success" | "error" | "info" | "warning"
      ) => void
    ) =>
    async (dispatch: AppDispatch) => {
      try {
        const invitingFiltered: string[] = group.inviting.filter(
          (item: string) => item !== user.userID
        );
        const invitationToGroupfiltered: string[] =
          user.invitationToGroup.filter(
            (item: string) => item !== group.groupId
          );
        const objUpdateGroup = { inviting: invitingFiltered };
        const objUpdateUser = {
          invitationToGroup: invitationToGroupfiltered,
        };
        await updateGroup(group.groupId, objUpdateGroup);
        snackBarOpen("Request to add to group was declined!!!", "error");
        handleCloseCard();
        setTimeout(async () => {
          await uploadUpdateUser(user.userID, objUpdateUser);
        }, 1000);
      } catch (e: any) {
        console.log(e.message);
      }
    },
};
