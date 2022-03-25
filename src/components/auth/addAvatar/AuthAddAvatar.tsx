import React, { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useAuthStyles } from "../../../styles/mui-styles/auth-mui";
import CustomLoadingButton from "../../UI/buttons/CustomLoadingButton/CustomLoadingButton";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import { useActions } from "../../../lib/hooks/useActions";
import AlertCustom from "../../UI/alert/Alert/AlertCustom";

const AuthAddAvatar: FC = () => {
  const [avatar, setAvatar] = useState(null);

  const navigate = useNavigate();
  const classes = useAuthStyles();

  function handleChange(e: any) {
    setAvatar(e.currentTarget.files[0]);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // if (avatar === null || avatar === undefined) {
    //   // setAuthError("Please select a photo on your computer");
    //   return;
    // }
    // if (user === null) return;
    // setProfileUserUrlPhoto(user.userID, avatar);
  }

  function handleClickNavigate() {
    // setIsOnAuthStateBlocked(false);
    // setIsAuth(true);
    // navigate(RoutesNames.LOUNCHER);
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
            {/* <img src={user ? user.urlPhoto : ""} alt="My Avatar" /> */}
          </div>
          <TextField
            className={classes.auth_avatar__input_file}
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
          />
          <CustomLoadingButton isLoadingButton={false}>
            Upload
          </CustomLoadingButton>
          <button
            type="button"
            disabled={false}
            className="auth__link auth-avatar__skip"
            onClick={handleClickNavigate}
          >
            Finish
          </button>
        </form>
        {/* {authError && <AlertCustom>{authError}</AlertCustom>} */}
      </div>
    </div>
  );
};

export default AuthAddAvatar;
