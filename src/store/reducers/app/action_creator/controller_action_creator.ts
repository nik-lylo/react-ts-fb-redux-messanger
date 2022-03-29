import { AppDispatch } from "../../..";
import { fetchHasUserFriend } from "../../../../api/contact/fetchHasUserFriend";
import { isEmptyObj } from "../../../../lib/helper/isEmptyObj";
import {
  IFriends,
  IFriendsUser,
  IHasFriendController,
} from "../../../../lib/models/IFriends";
import { IGroup, IGroupObject } from "../../../../lib/models/IGroup";
import { IUser, IUserObject } from "../../../../lib/models/IUser";
import { ChatReducerActionCreators } from "../../chat/action_creator/reducer_action_creator";
import { AppActionEnum } from "../types";
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
      if (isEmptyObj(result) && user.myGroup.length !== 0) {
        return;
      }
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
    (
      friendsCollectionSnap: IFriends[],
      usersObjectList: IUserObject,
      hasUserFriend: IHasFriendController,
      myId: string
    ) =>
    async (dispatch: AppDispatch) => {
      try {
        let unread: number = 0;
        const result: IFriendsUser[] = [];
        let hasFriendLoacal = hasUserFriend;

        if (!hasUserFriend.checked) {
          const fetchHasFriend = await fetchHasUserFriend(myId);
          dispatch(AppReducerActionCreators.setHasUserFriend(fetchHasFriend));
          hasFriendLoacal = fetchHasFriend;
        }
        if (hasFriendLoacal.checked && hasFriendLoacal.hasFriend) {
          if (friendsCollectionSnap.length === 0) {
            return;
          }
        }
        if (friendsCollectionSnap.length !== 0) {
          friendsCollectionSnap.map((item: IFriends) => {
            unread = unread + item.unread;
            result.push({
              ...usersObjectList[item.userID],
              unread: item.unread,
              lastMessage: item.lastMessage,
            });
          });
        }

        dispatch(AppReducerActionCreators.setFriendsCollectionList(result));
        dispatch(AppReducerActionCreators.setIsFriendsControllerLoaded(true));
        dispatch(ChatReducerActionCreators.setAmountUnreadMessage(unread));
      } catch (e: any) {
        console.log(e.message);
      }
    },
};
