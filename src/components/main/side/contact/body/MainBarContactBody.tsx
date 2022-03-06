import React, { FC } from "react";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import ContactCard from "../../../../UI/cards/ContactCard/ContactCard";

const MainBarContactBody: FC = () => {
  const { filteredGlobalContact, filteredMyContact } = useTypedSelector(
    (s) => s.contactReducer
  );
  return (
    <div className="contact__body contact-body">
      <div className="contact-body__my">
        {filteredMyContact.map((item) => {
          return <ContactCard contact={item} key={item.userID} my={true} />;
        })}
      </div>
      <div className="contact-body__global">
        {filteredGlobalContact.length !== 0 ? (
          <div className="contact-body__global__title">Global results</div>
        ) : null}
        {filteredGlobalContact.map((item) => {
          return <ContactCard contact={item} key={item.userID} my={false} />;
        })}
      </div>
    </div>
  );
};

export default MainBarContactBody;
