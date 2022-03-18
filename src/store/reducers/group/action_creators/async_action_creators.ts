import { AppDispatch } from "../../..";
import { fetchNewGroupId } from "../../../../api/group/fetchNewGroupId";
import { filterCreateObject } from "../../../../lib/controlFunc/group/filterCreateObject";
import { IGenericObject } from "../../../../lib/models/ICommon";

export const AsyncGroupActionCreators = {
  setCreateGroup:
    (createObj: IGenericObject) => async (dispatch: AppDispatch) => {
      const filteredCreateObj: IGenericObject = filterCreateObject(createObj);
      const groupId = await fetchNewGroupId();
      console.log(groupId);
    },
};
