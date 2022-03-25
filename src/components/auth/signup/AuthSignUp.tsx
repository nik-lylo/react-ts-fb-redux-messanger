import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import { DefaultAvatar } from "../../../lib/models/DefaultValue";
import AlertCustom from "../../UI/alert/Alert/AlertCustom";
import Loader from "../../UI/loader/Loader/Loader";

const AuthSignUp: FC = () => {
  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [mail, setMail] = useState<string>("lulnuk1995@gmail.com");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    return function (): void {
      // setAuthError(null);
    };
  }, []);

  function handleChange(
    e: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  ): void {
    setState(e);
  }
  function rewrite(): void {
    setName("");
    setLastName("");
    setPassword("");
    setMail("");
  }

  function handleSubmit(e: any): void {
    e.preventDefault();
    // setSignUpUser(mail, password, name, lastname, rewrite, navigate);
  }

  function handleClickNavigate(): void {
    navigate(-1);
  }

  return (
    <div className="auth__signup signup-auth auth__center">
      <Loader isOpen={false} />
      <button
        className="auth__btnback icon-arrow-left"
        onClick={handleClickNavigate}
      ></button>
      <div className="signup-auth__body">
        <div className="signup-auth__title auth__title">New account</div>
        <div className="signup-auth__subtitle auth__subtitle">
          Introduce yourself
        </div>
        <div className="signup-auth__avatar">
          <img src={DefaultAvatar.AVATAR_PHOTO} alt="Default Photo" />
        </div>
        <form
          action="#"
          className="signup-auth__form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            onChange={(e) => handleChange(e.target.value, setName)}
            value={name}
            type="text"
            placeholder="Name"
            className="signup-auth__name auth__input"
            autoFocus
            required
            autoComplete="on"
            minLength={2}
          />
          <input
            onChange={(e) => handleChange(e.target.value, setLastName)}
            value={lastname}
            type="text"
            placeholder="Last name"
            required
            className="signup-auth__lastname auth__input"
            autoComplete="on"
            minLength={2}
          />
          <input
            onChange={(e) => handleChange(e.target.value, setMail)}
            value={mail}
            type="email"
            placeholder="Email"
            required
            className="signup-auth__mail auth__input"
            autoComplete="email"
            minLength={6}
          />
          <input
            onChange={(e) => handleChange(e.target.value, setPassword)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="signup-auth__password auth__input"
            minLength={6}
          />
          <button type="submit" className="auth__link signup-auth__submit ">
            Next
          </button>
        </form>
        {/* {authError && <AlertCustom>{authError}</AlertCustom>} */}
        <div className="signup-auth__text auth__subtitle">
          By creating an account you are accepting our
          <br />
          <span>Terms of service and Privacy policy</span>
        </div>
      </div>
    </div>
  );
};

export default AuthSignUp;
