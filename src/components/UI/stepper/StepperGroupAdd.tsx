import React, { FC } from "react";
import "./stepperGroupAdd.scss";
interface StepperGroupAddProps {
  step: 1 | 2 | 3;
}

const StepperGroupAdd: FC<StepperGroupAddProps> = ({ step }) => {
  return (
    <div className="stepper-group-add">
      <div
        className={
          step >= 1
            ? "stepper-group-add__item stepper-group-add__item_selected"
            : "stepper-group-add__item"
        }
      >
        <div className="stepper-group-add__round">1</div>
        <div className="stepper-group-add__text">Create info</div>
      </div>
      <div className="stepper-group-add__line"></div>
      <div
        className={
          step >= 2
            ? "stepper-group-add__item stepper-group-add__item_selected"
            : "stepper-group-add__item"
        }
      >
        <div className="stepper-group-add__round">2</div>
        <div className="stepper-group-add__text">Add contact</div>
      </div>
      <div className="stepper-group-add__line"></div>
      <div
        className={
          step === 3
            ? "stepper-group-add__item stepper-group-add__item_selected"
            : "stepper-group-add__item"
        }
      >
        <div className="stepper-group-add__round">3</div>
        <div className="stepper-group-add__text">Invite friends</div>
      </div>
    </div>
  );
};

export default StepperGroupAdd;
