import React, { FC, useEffect } from "react";
import { useActions } from "../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../lib/hooks/useTypedSelector";
import EmptyWrapperCustom from "../../../UI/wrapper/EmptyWrapperCustom/EmptyWrapperCustom";
import MainContentContactAbout from "./about/MainContentContactAbout";
import MainContentContactProfile from "./profile/MainContentContactProfile";

const MainContentContact: FC = () => {
  const { selectedContact } = useTypedSelector((s) => s.contactReducer);
  const { setSelectedContact } = useActions();

  useEffect(() => {
    return () => {
      setSelectedContact(null);
    };
  }, []);

  return (
    <div className="main-content-contact">
      <div className="main-content-contact__flex">
        {selectedContact ? (
          <>
            <MainContentContactProfile />
            <MainContentContactAbout />
          </>
        ) : (
          <EmptyWrapperCustom
            title="No contacts yet"
            subtitle="Invite your contacts to Openland or add people manually from their profiles,and they will appear here"
            image={require("../../../../assets/image/main/contact/addContact.png")}
          />
        )}
      </div>
    </div>
  );
};

export default MainContentContact;
