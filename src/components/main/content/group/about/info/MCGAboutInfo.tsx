import React, { FC } from "react";
import { dateFromCreatedAt } from "../../../../../../lib/helper/dateFromCreatedAt";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import InfoUserCard from "../../../../../UI/cards/InfoUserCard/InfoUserCard";
import "../mainContentGroupAbout.scss";

const MCGAboutInfo: FC = () => {
  const { selectedGroupInfo } = useTypedSelector((s) => s.groupReducer);
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);

  return (
    <div className="main-content-group-about__info group-about-info">
      <div className="group-about-info__left">
        <InfoUserCard
          icon="icon-dog-mail"
          infoText={
            selectedGroupInfo &&
            groupsObjectCollectionList[selectedGroupInfo].instagram
          }
        />
        <InfoUserCard
          icon="icon-twitter"
          infoText={
            selectedGroupInfo &&
            groupsObjectCollectionList[selectedGroupInfo].twitter
          }
        />
      </div>
      <div className="group-about-info__right">
        <InfoUserCard
          icon="icon-flag"
          infoText={
            selectedGroupInfo &&
            `Joined ${
              dateFromCreatedAt(
                groupsObjectCollectionList[selectedGroupInfo].joined
              )?.fulldate
            }`
          }
        />
        <InfoUserCard
          icon="icon-mail-contact"
          infoText={
            selectedGroupInfo &&
            groupsObjectCollectionList[selectedGroupInfo].facebook
          }
        />
      </div>
    </div>
  );
};

export default MCGAboutInfo;
