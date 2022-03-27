import React from "react";
import Auth from "../pages/Auth";
import ErrorPage from "../pages/ErrorPage";
import AuthSignIn from "../components/auth/signin/AuthSignIn";
import AuthSignUp from "../components/auth/signup/AuthSignUp";
import Main from "../pages/Main";
import Launcher from "../pages/Launcher";
import { RoutesNames } from "../lib/enum/router/RoutesEnum";
import { RoutesAuthEnum } from "../lib/enum/router/RoutesAuthEnum";
import {
  RoutesMainEnum,
  RoutesMainSettingsEnum,
} from "../lib/enum/router/RoutesMainEnum";
import MainSideContact from "../components/main/side/contact/MainSideContact";
import MainSideChat from "../components/main/side/chat/MainSideChat";
import MainSideSettings from "../components/main/side/settings/MainSideSettings";
import MainSideGroups from "../components/main/side/groups/MainSideGroups";
import MainSideNots from "../components/main/side/notifications/MainSideNots";
import MainContentSettingsEdit from "../components/main/content/settings/edit/MainContentSettingsEdit";
import MainContentSettingsProfile from "../components/main/content/settings/profile/MainContentSettingsProfile";
import MainContentSettingsSignout from "../components/main/content/settings/signout/MainContentSettingsSignout";

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
        children: [
          {
            path: RoutesMainSettingsEnum.EDIT,
            element: MainContentSettingsEdit,
          },
          {
            path: RoutesMainSettingsEnum.PROFILE,
            element: MainContentSettingsProfile,
          },
          {
            path: RoutesMainSettingsEnum.SIGN_OUT,
            element: MainContentSettingsSignout,
          },
        ],
      },
      { path: RoutesMainEnum.GROUPS, element: MainSideGroups },
      { path: RoutesMainEnum.NOTIFICATIONS, element: MainSideNots },
    ],
  },

  { path: RoutesNames.ERROR_PAGE, element: ErrorPage },
  { path: RoutesNames.LOUNCHER, element: Launcher },
];
