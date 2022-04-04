import React, { FC } from "react";
import { isEmptyObj } from "../../../../../lib/helper/isEmptyObj";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import MSGBodyAdminContainer from "./admin_container/MSGBodyAdminContainer";
import MSGBodyGlobalContainer from "./global_container/MSGBodyGlobalContainer";
import MSGBodyMemberContainer from "./member_container/MSGBodyMemberContainer";

interface MainSideGroupsBodyProps {
  searchInput: string;
}

const MainSideGroupsBody: FC<MainSideGroupsBodyProps> = ({ searchInput }) => {
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);

  if (isEmptyObj(groupsObjectCollectionList)) {
    return <div className="main-no-match">No group has been created yet</div>;
  }

  return (
    <div className="main-side-groups-body">
      <MSGBodyAdminContainer searchInput={searchInput} />
      <MSGBodyMemberContainer searchInput={searchInput} />
      <MSGBodyGlobalContainer searchInput={searchInput} />
    </div>
  );
};

export default MainSideGroupsBody;
