import React, { FC } from "react";
import { useActions } from "../../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import { IGroupMember } from "../../../../../../lib/models/IGroup";
import { IUser } from "../../../../../../lib/models/IUser";
import ContactCard from "../../../../../UI/cards/ContactCard/ContactCard";
import "../mainContentGroupAbout.scss";

const MCGMember: FC = () => {
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);
  const { groupsObjectCollectionList, usersObjectCollectionList } =
    useTypedSelector((s) => s.appReducer);

  return (
    <div className="main-content-group-about__member-container group-about-member-container">
      <div className="group-about-member-container__title main-17-title">
        Members{" "}
        <span className="group-about-member-container__number">
          {selectedGroupInfo &&
            groupsObjectCollectionList[selectedGroupInfo].members.length}
        </span>
      </div>
      <div className="group-about-member-container__add">
        <div className="group-about-member-container__button">
          <button className="icon-cross"></button>
        </div>
        <div className="group-about-member-container__text">Add people</div>
      </div>

      <div className="group-about-member-container__users">
        {selectedGroupInfo &&
          groupsObjectCollectionList[selectedGroupInfo].members.map(
            (item: IGroupMember) => {
              const user: IUser = usersObjectCollectionList[item.userId];
              return <ContactCard contact={user} my={true} key={user.userID} />;
            }
          )}
      </div>
    </div>
  );
};

export default MCGMember;
