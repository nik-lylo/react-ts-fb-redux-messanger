import React, { FC, ReactNode } from "react";
import { Alert } from "@mui/material";
import "./alertCustom.css";

interface AlertCustomProps {
  children: ReactNode;
}

const AlertCustom: FC<AlertCustomProps> = ({ children }) => {
  return <Alert severity="error">{children}</Alert>;
};

export default AlertCustom;
