
import { AuthActionCreators } from "./auth/action-creators/reducer_action_creators";
import { AsyncAuthActionCreators } from "./auth/action-creators/async_action_creators";
import { AuthOnStateActionCreators } from "./auth/action-creators/on_auth_state_action_creators";
import { ChangeUserActionCreators } from "./changeUser/action_creators/action_creator";
import { ChangeAsyActCrea } from "./changeUser/action_creators/async_action_creators";
import { ProfileActionCreators } from "./profile/action-creators/reducer_action_creators";
import { AsyncProfileActionCreators } from "./profile/action-creators/async_action_creators";
import { ContactActionCreators } from "./contact/action_creators/reducer_action_creator";
import { AsyncContactActionCreators } from "./contact/action_creators/async_action_creator";
import { ControllAuthActionCreators } from "./auth/action-creators/controll_action_creatots";
import { ControllContactActionCreators } from "./contact/action_creators/controll_action_creator";

export const allActionCreators = {
  ...AuthActionCreators,
  ...AsyncAuthActionCreators,
  ...AuthOnStateActionCreators,
  ...ProfileActionCreators,
  ...AsyncProfileActionCreators,
  ...ChangeUserActionCreators,
  ...ChangeAsyActCrea,
  ...ContactActionCreators,
  ...AsyncContactActionCreators,
  ...ControllAuthActionCreators,
  ...ControllContactActionCreators,
};
