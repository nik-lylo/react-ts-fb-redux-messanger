import React, { FC, useEffect, useState } from "react";
import { findMutualGroup } from "../../../../../../lib/controller/group/findMutualGroup";
import { useActions } from "../../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import { IGroup } from "../../../../../../lib/models/IGroup";
import GroupCardInfo from "../../../../../UI/cards/GroupCardInfo/GroupCardInfo";
import "../mainContentContactAbout.scss";

const MCCAboutMutualGroup: FC = () => {
  const {} = useActions();
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { usersObjectCollectionList, groupsObjectCollectionList } =
    useTypedSelector((s) => s.appReducer);
  const { selectedContact } = useTypedSelector((s) => s.contactReducer);
  const [mutualGroup, setMutualGroup] = useState<string[]>([]);

  useEffect(() => {
    if (selectedContact === null) {
      setMutualGroup([]);
      return;
    }
    const mutualFind: string[] = findMutualGroup(
      user.myGroup,
      usersObjectCollectionList[selectedContact].myGroup
    );
    setMutualGroup(mutualFind);
    console.log("mutual");
  }, [selectedContact]);

  return (
    <div className="main-content-contact-about__group contact-about-mutual-group">
      <div className="contact-about-mutual-group__title">
        <div className="contact-about-mutual-group__text">Mutual groups</div>
        <div className="contact-about-mutual-group__number">
          {mutualGroup.length}
        </div>
      </div>
      <div className="contact-about-mutual-group__container">
        {mutualGroup.map((it) => {
          const group: IGroup = groupsObjectCollectionList[it];
          return <GroupCardInfo group={group} key={it} />;
        })}
      </div>
    </div>
  );
};

export default MCCAboutMutualGroup;
