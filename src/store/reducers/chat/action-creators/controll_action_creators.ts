import { AppDispatch } from "../../..";
import { uploadUnreadFriend } from "../../../../api/chat/uploadUnreadFriend";
import { isEmptyObj } from "../../../../lib/helper/isEmptyObj";
import { IGroup } from "../../../../lib/models/IGroup";
import { IMessage } from "../../../../lib/models/IMessage";
import { IUser } from "../../../../lib/models/IUser";
import { ChatActionCreators } from "./reducer_action_creators";

export const ControllChatActionCreators = {
  // !Action по контролю слухача подій всіх моїх чатів...він дивиться на зміни їх полів
  setControllMyChatList:
    (
      myChatList: IUser[],
      myChatSnapList: IUser[],
      selectedChat: IUser,
      myId: string
    ) =>
    async (dispatch: AppDispatch) => {
      // !Якщо масив знимку є пустий нічого не робимо
      if (myChatSnapList.length === 0) return;
      // !Якщо довжина основного масиву довша ніж знимку Snap - нічого не робимо
      if (myChatList.length > myChatSnapList.length) return;
      // !Якщо довжина Snap знимку довша від основного масиву - то ми сортуємо цей
      // !ескіз і вставляємо його в основний масив
      if (myChatList.length < myChatSnapList.length) {
        myChatSnapList.sort(
          (a, b) => b.lastMessage.createdAt - a.lastMessage.createdAt
        );
        dispatch(ChatActionCreators.setMyChatList(myChatSnapList));
        return;
      }
      // !Якщо довжина масиву ескіза і основного масива одинакова то ми проходимось
      // !по кожному елементу масиву
      if (myChatList.length === myChatSnapList.length) {
        const mapped = myChatList.map((it: IUser) => {
          // !І далі фільтруємо ескіз шукаємо елемент з тим самим ID
          let filtered = myChatSnapList.filter(
            (snap: IUser) => it.userID === snap.userID
          );
          // !Перевіряємо чи є lastMessage пустий в основному елементі якщо так то
          // !вставляємо lastMessage з знимка і копіюємо unread і повертаємо зміни
          if (isEmptyObj(it.lastMessage)) {
            it.lastMessage = filtered[0].lastMessage;
            it.unread = filtered[0].unread;
            return it;
          }
          // !Перевіряємо чи є одинакові фільтрований User і SelectedChat і також чи їхні
          // !lastMessage не одинакові то ми встановлюємо lastMessage з ескіза і ставимо
          // ! непроситані в ноль
          if (
            filtered[0].userID === selectedChat.userID &&
            filtered[0].lastMessage.createdAt.seconds !==
              it.lastMessage.createdAt.seconds
          ) {
            it.lastMessage = filtered[0].lastMessage;
            uploadUnreadFriend(myId, selectedChat.userID);
            it.unread = 0;
            return it;
          }
          // !Перевіряємо lastMessage ескіза і основного ... якшо вони  не одинакові тоді
          // !встановлюємо lastMessage і непрочитані з ескіза
          if (
            filtered[0].lastMessage.createdAt.seconds !==
            it.lastMessage.createdAt.seconds
          ) {
            it.lastMessage = filtered[0].lastMessage;
            it.unread = filtered[0].unread;
            return it;
          }
          // !Перевіряємо коли змінився тільки непрочитане значення...і коли ескіза і основного
          // !масива не рівні то копіюємо його з ескіза
          if (filtered[0].unread !== it.unread) {
            // !а якшо елементи фільтрований і вибраний однакові то ми ставимо непрочитані в ноль
            // !щоб не було непрочитаних коли ми вибрали даний чат
            if (filtered[0].userID === selectedChat.userID) {
              it.unread = 0;
              return it;
            }
            it.unread = filtered[0].unread;
            return it;
          }
          // *Default return
          return it;
        });
        // !Сортуємо відфільтрований масив по часу останнього повідомлення
        mapped.sort(
          (a, b) =>
            b.lastMessage.createdAt.seconds - a.lastMessage.createdAt.seconds
        );
        // *Dispatchимо в основний масив змінений
        dispatch(ChatActionCreators.setMyChatList(mapped));
      }
    },
  setControllMyMessageList:
    (messageSnapList: IMessage[], selectedChat: IUser, myId: string) =>
    (dispatch: AppDispatch) => {
      if (
        messageSnapList.length === 0 &&
        selectedChat.lastMessage.createdAt.seconds === 0
      ) {
        dispatch(ChatActionCreators.setMessageList(messageSnapList));
        return;
      }
      if (messageSnapList.length === 0) return;
      if (
        messageSnapList[messageSnapList.length - 1].fromID !== myId &&
        messageSnapList[messageSnapList.length - 1].fromID !==
          selectedChat.userID
      ) {
        return;
      }
      dispatch(ChatActionCreators.setMessageList(messageSnapList));
    },
  setControllMyGroupMessageList:
    (messageGroupSnapList: IMessage[], selectedGroup: IGroup) =>
    (dispatch: AppDispatch) => {
      dispatch(ChatActionCreators.setMessageGroupList(messageGroupSnapList));
    },
};
