import { downloadPhoto } from "./downloadPhoto";
import { uploadPhoto } from "./uploadPhoto";

export async function onChangeAvatar(storagePath: string, file: any) {
  try {
    await uploadPhoto(storagePath, file);
    const linkAvatar = await downloadPhoto(storagePath);
    return linkAvatar;
  } catch (e: any) {
    console.log(e.message);
  }
}
