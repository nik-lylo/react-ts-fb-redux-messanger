import { AppDispatch } from "../../..";
import { checkIsUserFriend } from "../../../../api/chat/checkIsUserFriend";
import { uploadChatMessageToFriend } from "../../../../api/chat/uploadChatMessageToFriend";
import { uploadChatMessage } from "../../../../api/chat/uploadChatMessege";
import { uploadLastChatMessage } from "../../../../api/chat/uploadLastChatMessage";
import { uploadLastChatMessageToFriend } from "../../../../api/chat/uploadLastChatMessageToFriend";
import { uploadLastMessageToGroup } from "../../../../api/chat/uploadLastMessageToGroup";
import { uploadMessageToGroup } from "../../../../api/chat/uploadMessageToGroup";
import { uploadToFriendMyProfile } from "../../../../api/chat/uploadToFriendMyProfile";
import {
  IMessageChat,
  IMessageGroupChat,
} from "../../../../lib/models/IMessage";
import { IUser } from "../../../../lib/models/IUser";
import { ChatReducerActionCreators } from "./reducer_action_creator";

export const ChatAsyncActionCreators = {
  setUploadChatMessege:
    (
      myProfile: IUser,
      mesText: string,
      selectedChat: string,
      handleFocus: () => void,
      setInputMessage: any
    ) =>
    async (dispatch: AppDispatch) => {
      dispatch(ChatReducerActionCreators.setIsMessageLoaded(true));
      try {
        const messObj: IMessageChat = {
          text: mesText,
          fromID: myProfile.userID,
          urlPhoto: myProfile.urlPhoto,
          createdAt: new Date(),
          fullname: myProfile.fullname,
        };
        await uploadChatMessage(messObj, selectedChat);
        await uploadLastChatMessage(selectedChat, messObj);
        const isUserFriend = await checkIsUserFriend(
          myProfile.userID,
          selectedChat
        );
        if (!isUserFriend) {
          await uploadToFriendMyProfile(
            {
              userID: myProfile.userID,
              lastMessage: messObj,
              unread: 1,
            },
            selectedChat
          );
        } else {
          uploadLastChatMessageToFriend(
            myProfile.userID,
            selectedChat,
            messObj
          );
        }
        setInputMessage("");
        uploadChatMessageToFriend(messObj, selectedChat);
      } catch (e: any) {
        console.log(e.message);
      } finally {
        dispatch(ChatReducerActionCreators.setIsMessageLoaded(false));
        handleFocus();
      }
    },
  setUploadChatGroupMessage:
    (
      myProfile: IUser,
      messageText: string,
      selectedChatGroup: string,
      handleFocus: () => void,
      setInputMessage: any
    ) =>
    async (dispatch: AppDispatch) => {
      dispatch(ChatReducerActionCreators.setIsMessageLoaded(true));
      try {
        const messageObj: IMessageGroupChat = {
          text: messageText,
          fromID: myProfile.userID,
          fromGroupID: selectedChatGroup,
          urlPhoto: myProfile.urlPhoto,
          createdAt: new Date(),
          fullname: myProfile.fullname,
        };
        await uploadMessageToGroup(messageObj, selectedChatGroup);
        await uploadLastMessageToGroup(selectedChatGroup, messageObj);
        setInputMessage("");
      } catch (e: any) {
        console.log(e.message);
      } finally {
        dispatch(ChatReducerActionCreators.setIsMessageLoaded(false));
        handleFocus();
      }
    },
};
