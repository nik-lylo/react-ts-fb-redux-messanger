import React, { FC } from "react";
import { RoutesMainNotsEnum } from "../../../../lib/utilits/RoutesEnum";
import SideLink from "../../../UI/link/SideLink/SideLink";

const MainSideNots: FC = () => {
  return (
    <div className="main-side-nots">
      <div className="main-side-nots__title settings-title">Notifications</div>
      <SideLink
        icon="icon-web-star"
        text="Invitation"
        to={RoutesMainNotsEnum.INVITING}
      />
    </div>
  );
};

export default MainSideNots;
