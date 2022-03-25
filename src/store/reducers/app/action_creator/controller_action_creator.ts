import { AppDispatch } from "../../..";
import { IFriends, IFriendsUser } from "../../../../lib/models/IFriends";
import { IGroup, IGroupObject } from "../../../../lib/models/IGroup";
import { IUser, IUserObject } from "../../../../lib/models/IUser";
import { AppReducerActionCreators } from "./reducer_action_creator";

export const AppControllerActionCreators = {
  setAppControllerUsersCollection:
    (usersCollectionSnap: IUser[]) => (dispatch: AppDispatch) => {
      if (usersCollectionSnap.length === 0) return;
      const result: IUserObject = {};
      usersCollectionSnap.map((item: IUser) => {
        result[item.userID] = item;
      });
      dispatch(AppReducerActionCreators.setUsersObjectCollectionList(result));
      dispatch(AppReducerActionCreators.setIsUsersControllerLoaded(true));
    },
  setAppControllerGroupsCollection:
    (groupsCollectionSnap: IGroup[], user: IUser) =>
    (dispatch: AppDispatch) => {
      const result: IGroupObject = {};
      const myGroupList: IGroup[] = [];
      groupsCollectionSnap.map((item: IGroup) => {
        result[item.groupId] = item;
      });
      if (user.myGroup.length > 0) {
        user.myGroup.forEach((item: string) => {
          myGroupList.push(result[item]);
        });
      }
      dispatch(AppReducerActionCreators.setGroupsObjectCollectionList(result));
      dispatch(AppReducerActionCreators.setMyGroupList(myGroupList));
      dispatch(AppReducerActionCreators.setIsGroupsControllerLoaded(true));
    },
  setAppControllerFriendsCollection:
    (friendsCollectionSnap: IFriends[], usersObjectList: IUserObject) =>
    async (dispatch: AppDispatch) => {
      const result: IFriendsUser[] = [];
      if (friendsCollectionSnap.length !== 0) {
        friendsCollectionSnap.map((item: IFriends) => {
          result.push({
            ...usersObjectList[item.userID],
            unread: item.unread,
            lastMessage: item.lastMessage,
          });
        });
      }
      dispatch(AppReducerActionCreators.setFriendsCollectionList(result));
      dispatch(AppReducerActionCreators.setIsFriendsControllerLoaded(true));
    },
};
