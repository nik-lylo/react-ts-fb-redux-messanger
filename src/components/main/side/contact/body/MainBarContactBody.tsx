import React, { FC } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IUser } from "../../../../../lib/models/IUser";
import ContactCard from "../../../../UI/cards/ContactCard/ContactCard";

const MainBarContactBody: FC = () => {
  const { filteredGlobalContact, filteredMyContact, usersCollectionList } =
    useTypedSelector((s) => s.contactReducer);
  return (
    <div className="contact__body contact-body">
      <div className="contact-body__my">
        {filteredMyContact.map((item) => {
          const chat: IUser = usersCollectionList[item.userID];
          return <ContactCard contact={chat} key={chat.userID} my={true} />;
        })}
      </div>
      <div className="contact-body__global">
        {filteredGlobalContact.length !== 0 ? (
          <div className="contact-body__global__title">Global results</div>
        ) : null}
        {filteredGlobalContact.map((item) => {
          const filterChat: IUser = usersCollectionList[item.userID];
          return (
            <ContactCard
              contact={filterChat}
              key={filterChat.userID}
              my={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainBarContactBody;
