import React, { ChangeEvent, FC, useState } from "react";
import "./selectCustom.scss";
interface SelectCustomProps {
  name: string;
  value: string;
  setValue: any;
  optValue: string[];
}

const SelectCustom: FC<SelectCustomProps> = ({
  value,
  setValue,
  optValue,
  name,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="select-custom">
      <div
        className={
          focus || value !== ""
            ? "select-custom__placeholder_focused"
            : "select-custom__placeholder"
        }
      >
        {name}
      </div>
      <select
        value={value}
        name="month"
        className="select-custom__select"
        onChange={handleChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        {optValue.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCustom;
