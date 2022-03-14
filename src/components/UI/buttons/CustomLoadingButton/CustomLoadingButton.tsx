import React, { FC } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import "./customLoadingButton.css";
import { CircularProgress } from "@mui/material";
import { useAuthStyles } from "../../../../styles/mui-styles/auth-mui";

interface Loadbutton {
  children: string;
  isLoadingButton: boolean;
  handleClick?: () => void;
}

const CustomLoadingButton: FC<Loadbutton> = ({
  children,
  isLoadingButton,
  handleClick,
}) => {
  const classes = useAuthStyles();
  return (
    <LoadingButton
      onClick={handleClick}
      className={
        isLoadingButton
          ? classes.auth_avatar__btn_loading_active
          : classes.auth_avatar__btn_loading
      }
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
