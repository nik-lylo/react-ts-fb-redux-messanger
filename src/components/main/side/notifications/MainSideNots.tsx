import React, { FC } from "react";
import { RoutesMainNotsEnum } from "../../../../lib/enum/router/RoutesMainEnum";
import SideLink from "../../../UI/link/SideLink/SideLink";

const MainSideNots: FC = () => {
  return (
    <div className="main-side-nots">
      <div className="main-side-nots__title main-24-title">Notifications</div>
      <SideLink
        icon="icon-web-star"
        text="Invitation"
        to={RoutesMainNotsEnum.INVITING}
      />
    </div>
  );
};

export default MainSideNots;
