import React, { FC } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import "./customLoadingButton.css";
import { CircularProgress } from "@mui/material";

interface Loadbutton {
  children: string;
  isLoadingButton: boolean;
  classes?: any;
  handleClick?: () => void;
}

const CustomLoadingButton: FC<Loadbutton> = ({
  children,
  isLoadingButton,
  handleClick,
  classes,
}) => {
  return (
    <LoadingButton
      onClick={handleClick}
      className={classes}
      loading={isLoadingButton}
      variant="contained"
      loadingPosition="center"
      type="submit"
      loadingIndicator={<CircularProgress color="primary" size={16} />}
      startIcon={!isLoadingButton && <FileDownloadIcon />}
    >
      {!isLoadingButton && children}
    </LoadingButton>
  );
};

export default CustomLoadingButton;
