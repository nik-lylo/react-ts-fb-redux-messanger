import { signInWithPopup } from "firebase/auth";
import { firebaseAuth, googleProvider } from "../../lib/firebase";

export async function fetchGoogleSignIn() {
  try {
    const googleUserSnap = await signInWithPopup(firebaseAuth, googleProvider);
    return googleUserSnap;
  } catch (e: any) {
    if (e.message === "Firebase: Error (auth/popup-closed-by-user).") {
      throw new Error("Sorry, but I was unable to log in to Google");
    }
    throw new Error(e.message);
  }
}
