import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop } from "@mui/material";
import "./loader.css";

interface LoaderProps {
  isOpen: boolean;
}

const Loader: FC<LoaderProps> = ({ isOpen }) => {
  return (
    <Backdrop
      sx={{
        color: "rgba(0, 132, 255, 0.466)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={isOpen}
    >
      <CircularProgress size="40px" color="inherit" />
    </Backdrop>
  );
};

export default Loader;
