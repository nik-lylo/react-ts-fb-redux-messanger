import React, { FC } from "react";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import ContactCard from "../../../../../UI/cards/ContactCard/ContactCard";
import "../mainContentGroupAbout.scss";

const MCGAboutAdminContainer: FC = () => {
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);
  const { usersObjectCollectionList, groupsObjectCollectionList } =
    useTypedSelector((s) => s.appReducer);

  return (
    <div>
      <div className="group-about-member-container__title main-17-title">
        Admin
      </div>
      {selectedGroupInfo && (
        <ContactCard
          contact={
            usersObjectCollectionList[
              groupsObjectCollectionList[selectedGroupInfo].admin
            ]
          }
          my={true}
        />
      )}
    </div>
  );
};

export default MCGAboutAdminContainer;
