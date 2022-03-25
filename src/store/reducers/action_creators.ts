import { AppControllerActionCreators } from "./app/action_creator/controller_action_creator";
import { AppListenerActionCreators } from "./app/action_creator/listener_action_creators";
import { AppReducerActionCreators } from "./app/action_creator/reducer_action_creator";
import { AuthAsyncActionCreators } from "./auth/action_creator/async_action_creator";
import { AuthListenerActionCreators } from "./auth/action_creator/listener_action_creator";
import { AuthReducerActionCreators } from "./auth/action_creator/reducer_action_creator";
import { ContactAsyncActionCreators } from "./contact/action_creator/async_action_creators";
import { ContactReducerActionCreators } from "./contact/action_creator/reducer_action_creator";
import { ProfileReducerActionCreators } from "./profile/action_creator/reducer_action_creator";

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
};
