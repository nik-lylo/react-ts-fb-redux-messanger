import { arrayUnion, increment } from "firebase/firestore";
import { AppDispatch } from "../../..";
import { deleteGroup } from "../../../../api/group/deleteGroup";
import { updateGroup } from "../../../../api/group/updateGroup";
import { uploadUpdateUser } from "../../../../api/user/uploadUpdateUser";
import { deleteAllInvitingInUser } from "../../../../lib/controller/group/deleteAllInvitingInUser";
import { IGroup, IGroupMember } from "../../../../lib/models/IGroup";
import { IUser } from "../../../../lib/models/IUser";
import { ChatReducerActionCreators } from "../../chat/action_creator/reducer_action_creator";
import { GroupReducerActionCreators } from "./reducer_action_creator";

export const GroupAsyncControllerActionCreators = {
  setJoinGroup:
    (group: IGroup, userId: string) => async (dispatch: AppDispatch) => {
      dispatch(GroupReducerActionCreators.setGroupChangeIsLoaded(true));
      try {
        const member: IGroupMember = { userId, joined: new Date() };
        await updateGroup(group.groupId, {
          members: arrayUnion(member),
          member_amount: increment(1),
        });
        await uploadUpdateUser(userId, { myGroup: arrayUnion(group.groupId) });
        dispatch(GroupReducerActionCreators.setRoleInGroup("member"));
        dispatch(
          GroupReducerActionCreators.setGroupSnackbarProps({
            open: true,
            status: "success",
            text: "You have successfully joined the group!!!Congratulation.",
          })
        );
      } catch (e: any) {
        dispatch(
          GroupReducerActionCreators.setGroupSnackbarProps({
            open: true,
            status: "error",
            text: e.message,
          })
        );
      } finally {
        dispatch(GroupReducerActionCreators.setGroupChangeIsLoaded(false));
      }
    },
  setLeaveGroup:
    (group: IGroup, user: IUser) => async (dispatch: AppDispatch) => {
      dispatch(GroupReducerActionCreators.setGroupChangeIsLoaded(true));
      try {
        const membersArray: IGroupMember[] = group.members.filter(
          (it) => it.userId !== user.userID
        );
        const myGroupArray: string[] = user.myGroup.filter(
          (it) => it !== group.groupId
        );
        await updateGroup(group.groupId, {
          members: membersArray,
          member_amount: increment(-1),
        });
        await uploadUpdateUser(user.userID, { myGroup: myGroupArray });
        dispatch(GroupReducerActionCreators.setRoleInGroup("guest"));
        dispatch(
          GroupReducerActionCreators.setGroupSnackbarProps({
            open: true,
            status: "success",
            text: "You have successfully leave the group!!!",
          })
        );
      } catch (e: any) {
        dispatch(
          GroupReducerActionCreators.setGroupSnackbarProps({
            open: true,
            status: "error",
            text: e.message,
          })
        );
      } finally {
        dispatch(GroupReducerActionCreators.setGroupChangeIsLoaded(false));
      }
    },
  setDeleteGroup:
    (group: IGroup, user: IUser) => async (dispatch: AppDispatch) => {
      dispatch(GroupReducerActionCreators.setGroupChangeIsLoaded(true));
      dispatch(GroupReducerActionCreators.setSelectedGroupInfo(null));
      try {
        const myGroupArray: string[] = user.myGroup.filter(
          (it) => it !== group.groupId
        );
        await deleteAllInvitingInUser(group);
        await uploadUpdateUser(user.userID, { myGroup: myGroupArray });
        await deleteGroup(group.groupId);
        dispatch(
          GroupReducerActionCreators.setGroupSnackbarProps({
            open: true,
            status: "info",
            text: "The group has been deleted!!!",
          })
        );
      } catch (e: any) {
        dispatch(
          GroupReducerActionCreators.setGroupSnackbarProps({
            open: true,
            status: "error",
            text: e.message,
          })
        );
      } finally {
        setTimeout(() => {
          dispatch(GroupReducerActionCreators.setGroupChangeIsLoaded(false));
        }, 2000);
      }
    },
};
