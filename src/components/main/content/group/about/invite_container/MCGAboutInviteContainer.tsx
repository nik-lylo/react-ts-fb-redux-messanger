import React, { FC } from "react";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import ContactCardInfo from "../../../../../UI/cards/ContactCardInfo/ContactCardInfo";

const MCGAboutInviteContainer: FC = () => {
  const { groupsObjectCollectionList, usersObjectCollectionList } =
    useTypedSelector((s) => s.appReducer);
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);
  return (
    <div className="group-about-member-container__invite">
      {groupsObjectCollectionList[selectedGroupInfo!].inviting.map(
        (id: string) => {
          const user = usersObjectCollectionList[id];
          return <ContactCardInfo contact={user} key={user.userID} />;
        }
      )}
    </div>
  );
};

export default MCGAboutInviteContainer;
