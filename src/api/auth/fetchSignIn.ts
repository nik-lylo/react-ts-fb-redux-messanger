import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../lib/firebase";
import { IUser } from "../../lib/models/IUser";
import { fetchUser } from "../user/fetchUser";

export async function fetchSignIn(mail: string, password: string) {
  try {
    const currentUser = await signInWithEmailAndPassword(
      firebaseAuth,
      mail,
      password
    );
  } catch (e: any) {
    const tooMuchAttempt =
      "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).";
    if (e.message === "Firebase: Error (auth/wrong-password).") {
      throw new Error("Wrong password");
    }
    if (e.message === tooMuchAttempt) {
      throw new Error(
        "Access to this account has been temporarily disabled due to many unsuccessful login attempts.You can immediately restore it by resetting your password or you can try again later."
      );
    }
    if (e.message === "Firebase: Error (auth/user-not-found).") {
      throw new Error("This account was not found...");
    }

    throw new Error(e.message);
  }
}
