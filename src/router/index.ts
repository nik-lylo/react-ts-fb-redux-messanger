import React from "react";
import Auth from "../pages/Auth";
import ErrorPage from "../pages/ErrorPage";
import AuthSignIn from "../components/auth/signin/AuthSignIn";
import AuthSignUp from "../components/auth/signup/AuthSignUp";
import AuthAddAvatar from "../components/auth/addAvatar/AuthAddAvatar";
import Main from "../pages/Main";
import Launcher from "../pages/Launcher";
import { RoutesNames } from "../lib/enum/router/RoutesEnum";
import { RoutesAuthEnum } from "../lib/enum/router/RoutesAuthEnum";
import { RoutesMainEnum } from "../lib/enum/router/RoutesMainEnum";
import MainSideContact from "../components/main/side/contact/MainSideContact";
import MainSideChat from "../components/main/side/chat/MainSideChat";
import MainSideSettings from "../components/main/side/settings/MainSideSettings";
import MainSideGroups from "../components/main/side/groups/MainSideGroups";

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
      { path: RoutesMainEnum.CONTACT, element: MainSideContact },
      { path: RoutesMainEnum.CHAT, element: MainSideChat },

      {
        path: RoutesMainEnum.SETTINGS,
        element: MainSideSettings,
      },
      { path: RoutesMainEnum.GROUPS, element: MainSideGroups },
    ],
  },

  { path: RoutesNames.ERROR_PAGE, element: ErrorPage },
  { path: RoutesNames.LOUNCHER, element: Launcher },
];
