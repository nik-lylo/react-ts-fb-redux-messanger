import { AppDispatch } from "../../..";
import { IFriends } from "../../../../lib/models/IFriends";
import { IGroup, IGroupObject } from "../../../../lib/models/IGroup";
import { IUser, IUserObject } from "../../../../lib/models/IUser";
import { AppReducerActionCreators } from "./reducer_action_creator";

export const AppControllerActionCreators = {
  setAppControllerUsersCollection:
    (usersCollectionSnap: IUser[]) => (dispatch: AppDispatch) => {
      if (usersCollectionSnap.length === 0) {
        return;
      }
      const result: IUserObject = {};
      usersCollectionSnap.map((item: IUser) => {
        result[item.userID] = item;
      });
      dispatch(AppReducerActionCreators.setUsersObjectCollectionList(result));
      dispatch(AppReducerActionCreators.setIsUsersControllerLoaded(true));
    },
  setAppControllerGroupsCollection:
    (groupsCollectionSnap: IGroup[]) => (dispatch: AppDispatch) => {
      if (groupsCollectionSnap.length === 0) {
        return;
      }
      const result: IGroupObject = {};
      groupsCollectionSnap.map((item: IGroup) => {
        result[item.groupId] = item;
      });
      dispatch(AppReducerActionCreators.setGroupsObjectCollectionList(result));
    },
  setAppControllerFriendsCollection:
    (friendsCollectionSnap: IFriends[]) => (dispatch: AppDispatch) => {
      if (friendsCollectionSnap.length === 0) {
        return;
      }
      dispatch(
        AppReducerActionCreators.setFriendsCollectionList(friendsCollectionSnap)
      );
    },
};
