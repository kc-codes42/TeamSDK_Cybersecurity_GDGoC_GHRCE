import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);


function assertEnv(name: string) {
  if (!process.env[name]) {
    throw new Error(`Missing env: ${name}`);
  }
}

assertEnv("NEXT_PUBLIC_FIREBASE_API_KEY");
assertEnv("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN");
assertEnv("NEXT_PUBLIC_FIREBASE_PROJECT_ID");


export const auth = getAuth(app);
