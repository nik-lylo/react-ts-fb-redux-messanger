import { deleteMessageGroup } from "../../../api/chat/deleteMessageGroup";
import { fetchMessageGroup } from "../../../api/chat/fetchMessageGroup";
import { IMessageGroupChat } from "../../models/IMessage";

export async function deleteAllGroupMessage(groupId: string) {
  try {
    const allMessage: IMessageGroupChat[] = await fetchMessageGroup(groupId);
    allMessage.map(async (it: IMessageGroupChat) => {
      await deleteMessageGroup(groupId, it.messageID!);
    });
  } catch (e: any) {
    throw new Error(e.message);
  }
}
