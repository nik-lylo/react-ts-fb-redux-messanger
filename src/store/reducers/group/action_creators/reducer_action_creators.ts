import { IGroupObject } from "../../../../lib/models/ICommon";
import { IGroup } from "../../../../lib/models/IGroup";
import {
  GroupActionEnum,
  SetCreateGroupError,
  SetGroupCollectionList,
  SetGroupIsLoading,
  SetGroupSnapList,
  SetIsGroupCollectionListLoaded,
  SetOpenPopupCreateGroup,
} from "../types";

export const GroupActionCreators = {
  setOpenPopupCreateGroup: (flag: boolean): SetOpenPopupCreateGroup => ({
    type: GroupActionEnum.SET_OPEN_POPUP_CREATE_GROUP,
    payload: flag,
  }),
  setCreateGroupError: (err: string | null): SetCreateGroupError => ({
    type: GroupActionEnum.SET_CREATE_GROUP_ERROR,
    payload: err,
  }),
  setGroupIsLoading: (flag: boolean): SetGroupIsLoading => ({
    type: GroupActionEnum.SET_GROUP_IS_LOADING,
    payload: flag,
  }),
  setGroupSnapList: (arr: IGroup[]): SetGroupSnapList => ({
    type: GroupActionEnum.SET_GROUP_SNAP_LIST,
    payload: arr,
  }),
  setGroupCollectionsList: (obj: IGroupObject): SetGroupCollectionList => ({
    type: GroupActionEnum.SET_GROUP_COLLECTION_LIST,
    payload: obj,
  }),
  setIsGroupCollectionsListLoaded: (
    flag: boolean
  ): SetIsGroupCollectionListLoaded => ({
    type: GroupActionEnum.SET_IS_GROUP_COLLECTION_LIST_LOADED,
    payload: flag,
  }),
};
