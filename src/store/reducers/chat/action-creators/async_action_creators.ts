import { serverTimestamp } from "firebase/firestore";
import { AppDispatch } from "../../..";
import { checkIsUserFriend } from "../../../../api/chat/checkIsUserFriend";
import { uploadLastMessage } from "../../../../api/chat/uploadLastMessage";
import { uploadLastMessageToFriend } from "../../../../api/chat/uploadLastMessageToFriend";
import { uploadMessageToFriend } from "../../../../api/chat/uploadMessageToFriend";
import { uploadMessage } from "../../../../api/chat/uploadMessege";
import { fetchMyContact } from "../../../../api/contact/fetchMyContact";
import { uploadToFriendContact } from "../../../../api/contact/uploadToFriendContact";
import { IMessage } from "../../../../lib/models/IMessage";
import { IUser } from "../../../../lib/models/IUser";
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
  setUploadMessege:
    (
      myProfile: IUser,
      mesText: string,
      selectedChat: IUser,
      handleFocus: () => void
    ) =>
    async (dispatch: AppDispatch) => {
      dispatch(ChatActionCreators.setIsMessageLoading(true));
      try {
        const messObj: IMessage = {
          text: mesText,
          fromID: myProfile.userID,
          urlPhoto: myProfile.urlPhoto,
          createdAt: serverTimestamp(),
          fullname: myProfile.fullname,
        };
        await uploadMessage(messObj, selectedChat.userID);
        await uploadLastMessage(myProfile.userID, selectedChat.userID, messObj);
        const isUserFriend = await checkIsUserFriend(
          myProfile.userID,
          selectedChat.userID
        );
        if (!isUserFriend) {
          await uploadToFriendContact(
            {
              ...myProfile,
              lastMessage: messObj,
            },
            selectedChat.userID
          );
        } else {
          uploadLastMessageToFriend(
            myProfile.userID,
            selectedChat.userID,
            messObj
          );
        }
        uploadMessageToFriend(messObj, selectedChat.userID);
        dispatch(ChatActionCreators.setChatInputText(""));
      } catch (e: any) {
        console.log(e.message);
      } finally {
        dispatch(ChatActionCreators.setIsMessageLoading(false));
        handleFocus();
      }
    },
};
