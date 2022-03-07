import { AppDispatch } from "../../..";
import { fetchMyContact } from "../../../../api/contact/fetchMyContact";
import { ChatActionCreators } from "./reducer_action_creators";

export const AsyncChatActionCreators = {
  setFetchMyChatList: (myId: string) => async (dispatch: AppDispatch) => {
    try {
      const list = await fetchMyContact(myId);
      dispatch(ChatActionCreators.setMyChatList(list));
    } catch (e: any) {
      dispatch(ChatActionCreators.setChatError(e.message));
    }
  },
};
