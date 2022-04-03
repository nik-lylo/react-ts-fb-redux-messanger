import React, { FC, useState } from "react";
import { useActions } from "../../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../../lib/hooks/useTypedSelector";
import PopupGroupAdd from "../../../../../UI/popup/PopupGroupAdd/PopupGroupAdd";
import MCGAboutInviteContainer from "../invite_container/MCGAboutInviteContainer";
import "../mainContentGroupAbout.scss";
import MCGAboutMemberContainer from "../member_container/MCGAboutMemberContainer";

const MCGAboutMember: FC = () => {
  const {
    selectedGroupInfo,
    openPopupAddGroup,
    roleInGroup,
    statusSelectedGroup,
  } = useTypedSelector((s) => s.groupReducer);
  const { groupsObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { setOpenPopupAddGroup } = useActions();

  const [selectedContainer, setSelectedContainer] = useState<"left" | "right">(
    "left"
  );

  function handleOpenPopup() {
    setOpenPopupAddGroup(true);
  }

  return (
    <div className="main-content-group-about__member-container group-about-member-container">
      <div className="group-about-member-container__links ">
        <div
          onClick={() => setSelectedContainer("left")}
          className={
            selectedContainer === "left"
              ? "ml15 group-about-member-container__title group-about-member-container__selected  main-17-title"
              : "ml15 group-about-member-container__title  main-17-title"
          }
        >
          Members{" "}
          <span className="group-about-member-container__number">
            {selectedGroupInfo &&
              groupsObjectCollectionList[selectedGroupInfo].members.length}
          </span>
        </div>

        <div
          onClick={() => setSelectedContainer("right")}
          className={
            selectedContainer === "right"
              ? "group-about-member-container__title group-about-member-container__selected  main-17-title"
              : "group-about-member-container__title  main-17-title"
          }
        >
          Invitations sent{" "}
          <span className="group-about-member-container__number">
            {selectedGroupInfo &&
              groupsObjectCollectionList[selectedGroupInfo].inviting.length}
          </span>
        </div>
      </div>
      {roleInGroup === "admin" ||
      (roleInGroup === "member" && statusSelectedGroup === "Public") ? (
        <div className="group-about-member-container__add">
          <div
            className="group-about-member-container__button"
            onClick={handleOpenPopup}
          >
            <button className="icon-cross"></button>
          </div>
          <div className="group-about-member-container__text">Add people</div>
        </div>
      ) : null}
      <PopupGroupAdd isOpen={openPopupAddGroup} />
      {selectedContainer === "left" ? (
        <MCGAboutMemberContainer />
      ) : (
        <MCGAboutInviteContainer />
      )}
    </div>
  );
};

export default MCGAboutMember;
