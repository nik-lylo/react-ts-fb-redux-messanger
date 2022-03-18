import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../lib/firebase";

export async function downloadPhoto(path: string) {
  try {
    const storageRef = ref(storage, path);
    const linkPhoto = await getDownloadURL(storageRef);
    return linkPhoto;
  } catch (e: any) {
    throw new Error("Error downloading photo.Please try again...");
  }
}
