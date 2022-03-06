import { AppDispatch } from "../../..";
import { AuthActionCreators } from "./reducer_action_creators";

export const ControllAuthActionCreators = {
  setDefaultIsAuth:
    (isOnAuthStateBlocked: boolean, userSnapId: string | null) =>
    (dispatch: AppDispatch) => {
      if (isOnAuthStateBlocked) {
        return;
      } else {
        if (userSnapId !== null) {
          dispatch(AuthActionCreators.setIsAuth(true));
        }
      }
    },
};
