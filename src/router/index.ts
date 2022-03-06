import React from "react";
import Auth from "../pages/Auth";
import ErrorPage from "../pages/ErrorPage";
import {
  RoutesAuthEnum,
  RoutesMainEnum,
  RoutesNames,
} from "../lib/utilits/RoutesEnum";
import AuthSignIn from "../components/auth/signin/AuthSignIn";
import AuthSignUp from "../components/auth/signup/AuthSignUp";
import AuthAddAvatar from "../components/auth/addAvatar/AuthAddAvatar";
import Main from "../pages/Main";
import Launcher from "../pages/Launcher";
import MainContactSide from "../components/main/side/contact/MainContactSide";
import MainSideChat from "../components/main/side/chat/MainSideChat";

export interface IRoute {
  path: string;
  element: React.ComponentType;
  children?: IRoute[];
}

export const publicRoutes: IRoute[] = [
  {
    path: RoutesNames.AUTH,
    element: Auth,
    children: [
      {
        path: RoutesAuthEnum.SIGN_IN,
        element: AuthSignIn,
      },
      {
        path: RoutesAuthEnum.SIGN_UP,
        element: AuthSignUp,
      },
      { path: RoutesAuthEnum.ADD_AVATAR, element: AuthAddAvatar },
    ],
  },
  { path: RoutesNames.ERROR_PAGE, element: ErrorPage },
  { path: RoutesNames.LOUNCHER, element: Launcher },
];

export const privateRoutes: IRoute[] = [
  {
    path: RoutesNames.MAIN,
    element: Main,
    children: [
      { path: RoutesMainEnum.CONTACT, element: MainContactSide },
      { path: RoutesMainEnum.CHAT, element: MainSideChat },
    ],
  },
  { path: RoutesNames.ERROR_PAGE, element: ErrorPage },
  { path: RoutesNames.LOUNCHER, element: Launcher },
];
