import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ProjectTranslation } from "./@types/types";

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


export interface Project {
  id: string;
  title: ProjectTranslation;
  description: ProjectTranslation;
  imageUrl?: string[];
  client?: ProjectTranslation;
}


export interface CaseStudy {
  title: ProjectTranslation;
  content: ProjectTranslation;
  imageUrl?: string;
}

export interface FirebaseProject {
  id: string;
  title: string | ProjectTranslation;
  description: string | ProjectTranslation;
  imageUrl?: string[];
  client?: string | ProjectTranslation;
}

export interface FirebaseCaseStudy {
  title: string | ProjectTranslation;
  content: string | ProjectTranslation;
  imageUrl?: string;
}

const normalizeTranslation = (value: string | ProjectTranslation): ProjectTranslation => {
  if (typeof value === 'string') {
    return { en: value, ru: value, es: value };
  }
  return value || { en: '', ru: '', es: '' };
};

const normalizeProject = (data: any): Project => {
  const normalized = {
    id: data.id,
    title: normalizeTranslation(data.title),
    description: normalizeTranslation(data.description),
    imageUrl: data.imageUrl || [],
    client: data.client ? normalizeTranslation(data.client) : undefined
  };
  
  
  return normalized;
};

const normalizeCaseStudy = (data: any): CaseStudy | null => {
  if (!data) return null;
  return {
    title: normalizeTranslation(data.title),
    content: normalizeTranslation(data.content),
    imageUrl: data.imageUrl
  };
};

// ✅ Масова обробка зображень
const fetchImageURLs = async (paths: string[] = []): Promise<string[]> => {
  return await Promise.all(
    paths.map(async (path) => {
      try {
        const correctedPath = path.startsWith("gs://")
          ? path.replace("gs://sabsusweb.appspot.com/", "")
          : path;
        const imageRef = ref(storage, correctedPath);
        const url = await getDownloadURL(imageRef);
        return url;
      } catch (error) {
        console.error("Error fetching image:", path, error);
        return "";
      }
    })
  );
};

const validateProject = (project: Project): boolean => {
  return !!project.title && !!project.description;
};

// ✅ Отримуємо проєкти
export const getProjects = async (): Promise<Project[]> => {
  try {
    const projectsCollection = collection(db, "projects");
    const snapshot = await getDocs(projectsCollection);

    const projects = await Promise.all(
      
      snapshot.docs.map(async (doc) => {
        
        const data = doc.data();
        const imageUrls = await fetchImageURLs(data.imageUrl || []);
        return normalizeProject({
          ...data,
          id: doc.id,
          imageUrl: imageUrls.filter(Boolean)
        });
      })
    );
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const getCaseStudy = async (): Promise<CaseStudy | null> => {
  try {
    const docRef = doc(db, "caseStudies", "main");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;
    return normalizeCaseStudy(docSnap.data());
  } catch (error) {
    console.error("Error fetching case study:", error);
    return null;
  }
};