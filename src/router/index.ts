import React from "react";
import Auth from "../pages/Auth";
import ErrorPage from "../pages/ErrorPage";
import {
  RoutesAuthEnum,
  RoutesMainEnum,
  RoutesMainSettingsEnum,
  RoutesNames,
} from "../lib/utilits/RoutesEnum";
import AuthSignIn from "../components/auth/signin/AuthSignIn";
import AuthSignUp from "../components/auth/signup/AuthSignUp";
import AuthAddAvatar from "../components/auth/addAvatar/AuthAddAvatar";
import Main from "../pages/Main";
import Launcher from "../pages/Launcher";
import MainContactSide from "../components/main/side/contact/MainContactSide";
import MainSideChat from "../components/main/side/chat/MainSideChat";
import MainSideSettings from "../components/main/side/settings/MainSideSettings";
import SettingsCommunities from "../components/main/content/settings/group/SettingsGroup";
import SettingsEdit from "../components/main/content/settings/edit/SettingsEdit";
import SettingsSignOut from "../components/main/content/settings/signout/SettingsSignOut";
import SettingsProfile from "../components/main/content/settings/profile/SettingsProfile";

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
      {
        path: RoutesMainEnum.SETTINGS,
        element: MainSideSettings,
        children: [
          { path: RoutesMainSettingsEnum.EDIT, element: SettingsEdit },
          {
            path: RoutesMainSettingsEnum.GROUP,
            element: SettingsCommunities,
          },
          { path: RoutesMainSettingsEnum.SIGN_OUT, element: SettingsSignOut },
          { path: RoutesMainSettingsEnum.PROFILE, element: SettingsProfile },
        ],
      },
    ],
  },

  { path: RoutesNames.ERROR_PAGE, element: ErrorPage },
  { path: RoutesNames.LOUNCHER, element: Launcher },
];
