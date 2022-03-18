import React, { ChangeEvent, FC, useState } from "react";
import "./groupCardAdd.scss";
import { DefaultValue } from "../../../../lib/models/DefaultValue";
import AvatarRound from "../../AvatarCustom/AvatarRound/AvatarRound";
import UserStatus from "../../user-status/UserStatus";
import { IUser } from "../../../../lib/models/IUser";
import { filterContactArray } from "../../../../lib/controlFunc/contact/filterContactArray";

interface GroupCardAddProps {
  contact: IUser;
  invitedContacts: IUser[];
  setInvitedContacts: any;
}
const GroupCardAdd: FC<GroupCardAddProps> = ({
  contact,
  invitedContacts,
  setInvitedContacts,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
  }
  function handleClick() {
    if (!checked) {
      setInvitedContacts([...invitedContacts, contact]);
      console.log("add");
    } else {
      const filtered = filterContactArray(invitedContacts, contact.userID);
      setInvitedContacts(filtered);
      console.log("del");
    }
    setChecked(!checked);
    console.log(invitedContacts);
  }

  return (
    <div className="group-card-add" onClick={handleClick}>
      <div className="group-card-add__container">
        <div className="group-card-add__avatar">
          <AvatarRound
            width="40px"
            height="40px"
            urlAvatar={contact.urlPhoto}
          />
        </div>
        <div className="group-card-add__info">
          <div className="group-card-add__fullname">{contact.fullname}</div>
          <div className="group-card-add__status">
            <UserStatus flag={contact.online} hover={false} />
          </div>
        </div>
      </div>
      <div className="group-card-add__radio">
        <input
          className="group-card-add__checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default GroupCardAdd;
