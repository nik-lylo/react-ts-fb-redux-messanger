import { collection, onSnapshot, query } from "firebase/firestore";
import { AppDispatch } from "../../..";
import { CollectionEnum } from "../../../../lib/enum/collection/CollectionEnum";
import { db } from "../../../../lib/firebase";
import { IFriends } from "../../../../lib/models/IFriends";
import { IGroup } from "../../../../lib/models/IGroup";
import { IUser } from "../../../../lib/models/IUser";
import { AppReducerActionCreators } from "./reducer_action_creator";

export const AppListenerActionCreators = {
  setListenerUsersCollection: () => (dispatch: AppDispatch) => {
    const collectionRef = collection(db, CollectionEnum.USERS);
    const q = query(collectionRef);
    onSnapshot(q, (snap) => {
      const array: IUser[] = [];
      snap.forEach((doc: any) => {
        array.push(doc.data());
      });
      dispatch(AppReducerActionCreators.setUsersCollectionSnap(array));
    });
  },
  setListenerFriendsCollection: (myId: string) => (dispatch: AppDispatch) => {
    const collectionRef = collection(
      db,
      CollectionEnum.USERS,
      myId,
      CollectionEnum.FRIENDS
    );
    const q = query(collectionRef);
    onSnapshot(q, (snap) => {
      const array: IFriends[] = [];
      snap.forEach((doc: any) => {
        array.push(doc.data());
      });
      dispatch(AppReducerActionCreators.setFriendsCollectionSnap(array));
    });
  },
  setListenerGroupsCollection: () => (dispatch: AppDispatch) => {
    const collectionRef = collection(db, CollectionEnum.GROUPS);
    const q = query(collectionRef);
    onSnapshot(q, (snap) => {
      const array: IGroup[] = [];
      snap.forEach((doc: any) => {
        array.push(doc.data());
      });
      dispatch(AppReducerActionCreators.setGroupsCollectionSnap(array));
    });
  },
};
