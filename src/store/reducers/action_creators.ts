import { AppControllerActionCreators } from "./app/action_creator/controller_action_creator";
import { AppListenerActionCreators } from "./app/action_creator/listener_action_creators";
import { AppReducerActionCreators } from "./app/action_creator/reducer_action_creator";
import { AuthAsyncActionCreators } from "./auth/action_creator/async_action_creator";
import { AuthListenerActionCreators } from "./auth/action_creator/listener_action_creator";
import { AuthReducerActionCreators } from "./auth/action_creator/reducer_action_creator";
import { ChatAsyncActionCreators } from "./chat/action_creator/async_action_creator";
import { ChatControllerActionCreators } from "./chat/action_creator/controller_action_creator";
import { ChatListenerActionCreators } from "./chat/action_creator/listener_action_creator";
import { ChatReducerActionCreators } from "./chat/action_creator/reducer_action_creator";
import { ContactAsyncActionCreators } from "./contact/action_creator/async_action_creators";
import { ContactReducerActionCreators } from "./contact/action_creator/reducer_action_creator";
import { GroupAsyncActionCreators } from "./group/action_creator/async_action_creator";
import { GroupAsyncControllerActionCreators } from "./group/action_creator/async_controll_action_creator";
import { GroupReducerActionCreators } from "./group/action_creator/reducer_action_creator";
import { ProfileReducerActionCreators } from "./profile/action_creator/reducer_action_creator";
import { SettingsAsyncActionCreators } from "./settings/action_creator/async_action_creator";
import { SettingsReducerActionCreators } from "./settings/action_creator/reducer_action_creator";

export const allActionCreators = {
  ...AppReducerActionCreators,
  ...AppListenerActionCreators,
  ...AppControllerActionCreators,
  ...AuthReducerActionCreators,
  ...AuthListenerActionCreators,
  ...AuthAsyncActionCreators,
  ...ProfileReducerActionCreators,
  ...ContactReducerActionCreators,
  ...ContactAsyncActionCreators,
  ...SettingsReducerActionCreators,
  ...SettingsAsyncActionCreators,
  ...GroupReducerActionCreators,
  ...GroupAsyncActionCreators,
  ...GroupAsyncControllerActionCreators,
  ...ChatReducerActionCreators,
  ...ChatControllerActionCreators,
  ...ChatListenerActionCreators,
  ...ChatAsyncActionCreators,
};
