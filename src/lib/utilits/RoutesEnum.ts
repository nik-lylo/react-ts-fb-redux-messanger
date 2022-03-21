export enum RoutesNames {
  MAIN = "/main",
  LOUNCHER = "/",
  AUTH = "/auth",
  ERROR_PAGE = "/*",
  USER_ID = ":id",
}
export enum RoutesAuthEnum {
  SIGN_IN = "sign_in",
  SIGN_UP = "sign_up",
  ADD_AVATAR = "add_avatar",
}
export enum RoutesFullAuthEnum {
  AUTH_ADD_AVATAR = "/auth/add_avatar",
}
export enum RoutesMainEnum {
  CONTACT = "contact",
  CHAT = "chat",
  SETTINGS = "settings",
  NOTIFICATIONS = "notifications",
}
export enum RoutesMainSettingsEnum {
  EDIT = "edit",
  GROUP = "group",
  PROFILE = "profile",
  SIGN_OUT = "signout",
}
export enum RoutesFullMainEnum {
  MAIN_CONTACT = "/main/contact",
  MAIN_CHAT = "/main/chat",
  MAIN_SETTINGS = "/main/settings",
  MAIN_NOTIFICATIONS = "/main/notifications",
}

export enum RoutesFullMainSettingsEnum {
  EDIT = "/main/settings/edit",
  GROUP = "/main/settings/group",
  PROFILE = "/main/settings/profile",
  SIGN_OUT = "/main/settings/signout",
}
export enum RoutesFullMainNotsEnum {
  INVITING = "/main/notifications/inviting",
}
export enum RoutesMainNotsEnum {
  INVITING = "inviting",
}
