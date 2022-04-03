import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { filterContactUserByString } from "../../../../../lib/controller/contact/filterContactUserByString";
import { useTypedSelector } from "../../../../../lib/hooks/useTypedSelector";
import { IUser } from "../../../../../lib/models/IUser";
import AlertCustom from "../../../alert/Alert/AlertCustom";
import SimpleButton from "../../../buttons/SimpleButton/SimpleButton";
import SimpleButtonLoad from "../../../buttons/SimpleButtonLoad/SimpleButtonLoad";
import GroupCardAdd from "../../../cards/GroupCardAdd/GroupCardAdd";
import InputSearch from "../../../input/InputSearch/InputSearch";
import AddToGroupList from "../../../list/AddToGroupList/AddToGroupList";
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
  const { usersObjectCollectionList } = useTypedSelector((s) => s.appReducer);
  const { user } = useTypedSelector((s) => s.profileReducer);
  const { groupCreateIsLoaded, groupCreateError } = useTypedSelector(
    (s) => s.groupReducer
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const filtered = filterContactUserByString(
      e.target.value,
      Object.values(usersObjectCollectionList)
    );
    setInputValue(e.target.value);
    setUsersArray(filtered);
  }

  function handleClickDelete() {
    setInputValue("");
    setUsersArray(Object.values(usersObjectCollectionList));
  }

  function handleClickStepMinus() {
    setStep(2);
  }

  useEffect(() => {
    if (usersArray.length === 0) {
      setUsersArray(Object.values(usersObjectCollectionList));
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
        <AddToGroupList
          usersArray={usersArray}
          invitedList={invitedContacts}
          setInvitedList={setInvitedContacts}
        />
      </div>
      {groupCreateError && <AlertCustom>{groupCreateError}</AlertCustom>}
      <div className="popup-group-create-step3__button">
        <div onClick={handleClickStepMinus}>
          <SimpleButton
            text="Back"
            isLoading={groupCreateIsLoaded}
            type="button"
          />
        </div>
        <SimpleButtonLoad
          padding="6px 20px"
          fontSize="16px"
          type="submit"
          text="Finish"
          isLoad={groupCreateIsLoaded}
        />
      </div>
    </>
  );
};

export default PopupGroupCreateStep3;
