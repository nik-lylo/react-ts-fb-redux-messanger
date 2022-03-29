import React, { FC } from "react";
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

interface SnackbarMuiProps {
  text: string;
  status: "success" | "error" | "info" | "warning";
  open: boolean;
  handleClose: () => void;
}

const SnackbarMui: FC<SnackbarMuiProps> = ({
  open,
  handleClose,
  text,
  status,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={status} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMui;
