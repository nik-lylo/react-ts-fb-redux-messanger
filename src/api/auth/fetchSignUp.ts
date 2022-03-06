import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { firebaseAuth } from "../../lib/firebase";
export async function fetchSignUp(
  mail: string,
  password: string
): Promise<UserCredential> {
  try {
    const newUser = await createUserWithEmailAndPassword(
      firebaseAuth,
      mail,
      password
    );
    return newUser;
  } catch (e: any) {
    if (e.message === "Firebase: Error (auth/email-already-in-use).") {
      throw new Error(
        "This email has been used before. Please enter another email!!!"
      );
    }
    if (e.message === "Firebase: Error (auth/invalid-email).") {
      throw new Error(
        "Please enter a valid email. This is not appropriate !!!"
      );
    }

    throw new Error(e.message);
  }
}
