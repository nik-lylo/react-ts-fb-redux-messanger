import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { filterContactByString } from "../../../../../lib/controlFunc/contact/filterContactByString";
import { isEmptyObj } from "../../../../../lib/helper/isEmptyObj";
import { useActions } from "../../../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IUser } from "../../../../../lib/models/IUser";
import SimpleButton from "../../../buttons/SimpleButton/SimpleButton";
import GroupCardAdd from "../../../cards/GroupCardAdd/GroupCardAdd";
import InputSearch from "../../../input/InputSearch/InputSearch";
export interface IUserChecked extends IUser {
  checked: boolean;
}

interface PopupGroupCreateStep3Props {
  setStep: any;
  invitedContacts: IUser[];
  setInvitedContacts: any;
}

const PopupGroupCreateStep3: FC<PopupGroupCreateStep3Props> = ({
  setStep,
  invitedContacts,
  setInvitedContacts,
}) => {
  const [usersArray, setUsersArray] = useState<IUser[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const { usersCollectionList } = useTypedSelector((s) => s.contactReducer);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const filtered = filterContactByString(
      e.target.value,
      Object.values(usersCollectionList)
    );
    setInputValue(e.target.value);
    setUsersArray(filtered);
  }

  function handleClickDelete() {
    setInputValue("");
  }

  function handleClickStepMinus() {
    setStep(2);
  }

  useEffect(() => {
    if (usersArray.length === 0) {
      setUsersArray(Object.values(usersCollectionList));
    }
  }, []);

  return (
    <>
      <div className="popup-group-create-step3">
        <div className="popup-group-create-step3__search">
          <InputSearch
            inputValue={inputValue}
            handleChange={handleChange}
            handleClick={handleClickDelete}
          />
        </div>
        <div className="popup-group-create-step3__container">
          {usersArray.map((contact: IUser) => (
            <GroupCardAdd
              key={contact.userID}
              contact={contact}
              invitedContacts={invitedContacts}
              setInvitedContacts={setInvitedContacts}
            />
          ))}
        </div>
      </div>
      <div className="popup-group-create-step3__button">
        <div onClick={handleClickStepMinus}>
          <SimpleButton text="Back" isLoading={false} type="button" />
        </div>
        <SimpleButton text="Finish" isLoading={false} type="submit" />
      </div>
    </>
  );
};

export default PopupGroupCreateStep3;
