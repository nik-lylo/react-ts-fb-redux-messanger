import { AuthActionCreators } from "./auth/action-creators/reducer_action_creators";
import { AsyncAuthActionCreators } from "./auth/action-creators/async_action_creators";
import { AuthOnStateActionCreators } from "./auth/action-creators/on_auth_state_action_creators";
import { ProfileActionCreators } from "./profile/action-creators/reducer_action_creators";
import { AsyncProfileActionCreators } from "./profile/action-creators/async_action_creators";
import { ContactActionCreators } from "./contact/action_creators/reducer_action_creator";
import { AsyncContactActionCreators } from "./contact/action_creators/async_action_creator";
import { ControllAuthActionCreators } from "./auth/action-creators/controll_action_creatots";
import { ControllContactActionCreators } from "./contact/action_creators/controll_action_creator";
import { ChatActionCreators } from "./chat/action-creators/reducer_action_creators";
import { AsyncChatActionCreators } from "./chat/action-creators/async_action_creators";
import { OnActionCreators } from "./chat/action-creators/on_action_creators";
import { ControllChatActionCreators } from "./chat/action-creators/controll_action_creators";
import { OnContactActionCreators } from "./contact/action_creators/on_action_creators";
import { GroupActionCreators } from "./group/action_creators/reducer_action_creators";
import { AsyncGroupActionCreators } from "./group/action_creators/async_action_creators";
import { OnGroupActionCreators } from "./group/action_creators/on_action_creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...AsyncAuthActionCreators,
  ...AuthOnStateActionCreators,
  ...ProfileActionCreators,
  ...AsyncProfileActionCreators,
  ...ContactActionCreators,
  ...AsyncContactActionCreators,
  ...ControllAuthActionCreators,
  ...ControllContactActionCreators,
  ...ChatActionCreators,
  ...AsyncChatActionCreators,
  ...OnActionCreators,
  ...ControllChatActionCreators,
  ...OnContactActionCreators,
  ...GroupActionCreators,
  ...AsyncGroupActionCreators,
  ...OnGroupActionCreators,
};
