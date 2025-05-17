import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { ThemeData } from "./components/ContainerWidget/HomeDefaultDarkTheme";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const getTheme = async (): Promise<ThemeData> => {
  const docRef = doc(db, "users", "ur75Bs0wdLghWIqkYaHI", "themes", "Q0TD6P3NL0G5NGlM2ISt");
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Document does not exist");
  }

  const data = docSnap.data();
  if (!data?.dark_theme_1?.styles) {
    throw new Error("Invalid theme structure");
  }

  return {
    isDefault: data.dark_theme_1.isDefault,
    styles: data.dark_theme_1.styles
  };
};

// Видаліть тестові функції testAccess() та checkAccess()