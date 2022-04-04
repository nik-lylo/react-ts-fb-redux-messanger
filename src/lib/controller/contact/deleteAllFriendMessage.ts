import { deleteMessageChat } from "../../../api/chat/deleteMessageChat";
import { fetchChatMessages } from "../../../api/chat/fetchChatMessages";
import { IMessageChat } from "../../models/IMessage";

export async function deleteAllFriendMessage(
  myId: string,
  selectedContactId: string
) {
  try {
    const allMessage: IMessageChat[] = await fetchChatMessages(
      myId,
      selectedContactId
    );

    allMessage.map(async (it: IMessageChat) => {
      await deleteMessageChat(myId, selectedContactId, it.messageID!);
    });
  } catch (e: any) {
    throw new Error("Error delete all message chat");
  }
}
