import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/config/firebase";

export async function login(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logout() {
  await signOut(auth);
}
