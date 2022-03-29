import React, { FC } from "react";
import EmptyWrapperCustom from "../../../../UI/wrapper/EmptyWrapperCustom/EmptyWrapperCustom";

const MainContentSettingsWrapper: FC = () => {
  return (
    <div className="main-content-settings-wrapper">
      <EmptyWrapperCustom
        title="You can customize your messenger"
        subtitle=""
        image={require("../../../../../assets/image/main/custom/custom-note.png")}
      />
    </div>
  );
};

export default MainContentSettingsWrapper;
