import React, { ChangeEvent, FC, useState } from "react";
import "./selectMonth.scss";
interface SelectMonthProps {
  value: string;
  setValue: any;
}

const SelectMonth: FC<SelectMonthProps> = ({ value, setValue }) => {
  const [focus, setFocus] = useState<boolean>(false);
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="select-month">
      <div
        className={
          focus || value !== ""
            ? "select-month__placeholder_focused"
            : "select-month__placeholder"
        }
      >
        Month
      </div>
      <select
        value={value}
        name="month"
        className="select-month__select"
        onChange={handleChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <option value=""></option>
        <option value="Januar">Januar</option>
        <option value="Februar">Februar</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </div>
  );
};

export default SelectMonth;
