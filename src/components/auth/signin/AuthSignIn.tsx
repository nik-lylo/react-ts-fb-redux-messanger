import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useActions } from "../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import { RoutesAuthEnum, RoutesNames } from "../../../lib/utilits/RoutesEnum";
import AlertCustom from "../../UI/alert/Alert/AlertCustom";
import Loader from "../../UI/loader/Loader/Loader";

const AuthSignIn: FC = () => {
  const [mail, setMail] = useState<string>("lulnuk1995@gmail.com");
  const [password, setPassword] = useState<string>("");
  const { setSignInUser, setAuthError, setGoogleSignIn } = useActions();
  const { authError, isAuthLoading } = useTypedSelector((s) => s.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    return function (): void {
      setAuthError(null);
    };
  }, []);

  function handleClickGoogleSignIn() {
    setGoogleSignIn(navigate);
  }

  function handleClickNavigate() {
    navigate(-1);
  }

  function handleChange(
    e: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  ): void {
    setState(e);
  }
  function handleSubmit(e: any): void {
    e.preventDefault();
    setSignInUser(mail, password, rewrite, navigate);
  }
  function rewrite(): void {
    setPassword("");
    setMail("");
  }

  return (
    <div className="auth__signin signin-auth auth__center">
      <Loader isOpen={isAuthLoading} />
      <button
        onClick={handleClickNavigate}
        className="auth__btnback icon-arrow-left"
      ></button>
      <div className="signin-auth__title auth__title">
        What’s your email and password?
      </div>
      <div className="signin-auth__subtitle auth__subtitle">
        You can also sign in with google account
      </div>
      <form
        action="#"
        className="signin-auth__form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          value={mail}
          type="email"
          placeholder="Email"
          className="signin-auth__mail auth__input"
          autoFocus
          required
          autoComplete="email"
          onChange={(e) => handleChange(e.target.value, setMail)}
        />
        <input
          value={password}
          type="password"
          required
          placeholder="Password"
          className="signin-auth__pass auth__input"
          onChange={(e) => handleChange(e.target.value, setPassword)}
          minLength={6}
        />
        <button type="submit" className="auth__link signin-auth__submit ">
          Let`s go
        </button>
        <button
          className="auth__link auth-registr__googlebtn"
          onClick={handleClickGoogleSignIn}
        >
          Sign In with Google
        </button>
      </form>
      {authError && <AlertCustom>{authError}</AlertCustom>}
      <div className="auth__subtitle signin-auth__text">
        if you are not registered click&nbsp;
        <Link
          className="signin-auth__text__link"
          to={`${RoutesNames.AUTH}/${RoutesAuthEnum.SIGN_UP}`}
        >
          here
        </Link>
      </div>
    </div>
  );
};

export default AuthSignIn;
