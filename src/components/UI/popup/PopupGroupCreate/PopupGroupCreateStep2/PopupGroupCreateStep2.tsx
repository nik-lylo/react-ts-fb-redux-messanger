import React, { FC } from "react";
import SimpleButton from "../../../buttons/SimpleButton/SimpleButton";
import InputSettings from "../../../input/InputSettings/InputSettings";

interface PopupGroupCreateStep2Props {
  instagram: string;
  twitter: string;
  facebook: string;
  setInstagram: any;
  setTwitter: any;
  setFacebook: any;
  setStep: any;
}

const PopupGroupCreateStep2: FC<PopupGroupCreateStep2Props> = ({
  instagram,
  twitter,
  facebook,
  setInstagram,
  setTwitter,
  setFacebook,
  setStep,
}) => {
  function handleClickStepPlus() {
    setStep(3);
  }
  function handleClickStepMinus() {
    setStep(1);
  }
  return (
    <>
      <div className="popup-group-create-step2">
        <InputSettings
          text="Instagram"
          type="text"
          value={instagram}
          setValue={setInstagram}
        />
        <InputSettings
          text="Twitter"
          type="text"
          value={twitter}
          setValue={setTwitter}
        />
        <InputSettings
          text="Facebook"
          type="text"
          value={facebook}
          setValue={setFacebook}
        />
      </div>

      <div className="popup-group-create-step2__button">
        <div onClick={handleClickStepMinus}>
          <SimpleButton text="Back" isLoading={false} />
        </div>
        <div onClick={handleClickStepPlus}>
          <SimpleButton text="Next" isLoading={false} />
        </div>
      </div>
    </>
  );
};

export default PopupGroupCreateStep2;
