import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesFullMainEnum } from "../../../../lib/enum/router/RoutesMainEnum";

const MainSideWrapper: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(RoutesFullMainEnum.MAIN_CHAT);
  }, []);

  return <div>MainSideWrapper</div>;
};

export default MainSideWrapper;
