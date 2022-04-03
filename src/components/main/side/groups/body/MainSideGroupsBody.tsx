import React, { FC } from "react";
import { isEmptyObj } from "../../../../../lib/helper/isEmptyObj";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../lib/models/IGroup";
import GroupCard from "../../../../UI/cards/GroupCard/GroupCard";
import MSGBodyAdminContainer from "./admin_container/MSGBodyAdminContainer";
import MSGBodyGlobalContainer from "./global_container/MSGBodyGlobalContainer";
import MSGBodyMemberContainer from "./member_container/MSGBodyMemberContainer";

const MainSideGroupsBody: FC = () => {
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);

  if (isEmptyObj(groupsObjectCollectionList)) {
    return <div className="main-no-match">No group has been created yet</div>;
  }

  return (
    <div className="main-side-groups-body">
      <MSGBodyAdminContainer />
      <MSGBodyMemberContainer />
      <MSGBodyGlobalContainer />
    </div>
  );
};

export default MainSideGroupsBody;
