import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../lib/firebase";

export async function uploadPhoto(userId: string, file: any) {
  try {
    const storageRef = ref(storage, `userPhoto/${userId}`);
    await uploadBytes(storageRef, file);
  } catch (e: any) {
    throw new Error("Error uploading photo.Please try again...");
  }
}
