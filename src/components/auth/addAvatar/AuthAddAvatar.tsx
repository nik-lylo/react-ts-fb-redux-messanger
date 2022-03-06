import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useAuthStyles } from "../../../styles/mui-styles/auth-mui";
import CustomLoadingButton from "../../UI/buttons/CustomLoadingButton/CustomLoadingButton";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import { useActions } from "../../../lib/hooks/useActions";
import AlertCustom from "../../UI/alert/Alert/AlertCustom";
import { RoutesNames } from "../../../lib/utilits/RoutesEnum";

const AuthAddAvatar: FC = () => {
  const [avatar, setAvatar] = useState(null);
  const { urlPhoto, userID } = useTypedSelector((s) => s.profileReducer);
  const { isAuthLoading, authError } = useTypedSelector((s) => s.authReducer);
  const {
    setProfileUserUrlPhoto,
    setAuthError,
    setIsOnAuthStateBlocked,
    setIsAuth,
  } = useActions();
  const navigate = useNavigate();
  const classes = useAuthStyles();

  function handleChange(e: any) {
    setAvatar(e.currentTarget.files[0]);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (avatar === null || avatar === undefined) {
      setAuthError("Please select a photo on your computer");
      return;
    }
    setProfileUserUrlPhoto(userID, avatar);
  }

  function handleClickNavigate() {
    setIsOnAuthStateBlocked(false);
    setIsAuth(true);
    navigate(RoutesNames.LOUNCHER);
  }

  return (
    <div className="auth-avatar auth__center">
      <div className="auth-avatar__body">
        <div className="auth__title auth-avatar__title">
          You can also add avatar
        </div>
        <div className="auth__subtitle auth-avatar__subtitle">
          Or add your avatar later
        </div>
        <form
          action="#"
          className="auth-avatar__form"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          <div className="auth-avatar__avatar">
            <img src={urlPhoto} alt="My Avatar" />
          </div>
          <TextField
            className={classes.auth_avatar__input_file}
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
          />
          <CustomLoadingButton
            classes={classes.auth_avatar__btn_loading}
            isLoadingButton={isAuthLoading}
          >
            Upload
          </CustomLoadingButton>
          <button
            type="button"
            disabled={isAuthLoading}
            className="auth__link auth-avatar__skip"
            onClick={handleClickNavigate}
          >
            Finish
          </button>
        </form>
        {authError && <AlertCustom>{authError}</AlertCustom>}
      </div>
    </div>
  );
};

export default AuthAddAvatar;
