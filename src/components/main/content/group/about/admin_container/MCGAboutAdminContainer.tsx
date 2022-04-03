import React, { FC } from "react";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";

import ContactCardInfo from "../../../../../UI/cards/ContactCardInfo/ContactCardInfo";
import "../mainContentGroupAbout.scss";

const MCGAboutAdminContainer: FC = () => {
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);
  const { usersObjectCollectionList, groupsObjectCollectionList } =
    useTypedSelector((s) => s.appReducer);

  return (
    <div>
      <div className="group-about-member-container__admintitle main-17-title">
        Admin
      </div>
      {selectedGroupInfo && (
        <ContactCardInfo
          contact={
            usersObjectCollectionList[
              groupsObjectCollectionList[selectedGroupInfo].admin
            ]
          }
        />
      )}
    </div>
  );
};

export default MCGAboutAdminContainer;
