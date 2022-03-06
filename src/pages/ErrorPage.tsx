import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { RoutesNames } from "../lib/utilits/RoutesEnum";

const ErrorPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="error_container">
      <h1 className="error_text">Цієї сторінки не існує</h1>
      <div className="error_nav">
        <span>Повернутися на головну</span>
        <HomeIcon
          sx={{ color: "green", cursor: "pointer" }}
          onClick={() => navigate(RoutesNames.LOUNCHER)}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
