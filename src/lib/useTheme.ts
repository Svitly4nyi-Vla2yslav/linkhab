// useTheme.ts
import { useEffect, useState } from 'react';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

import { db } from '../firabase';
import { Theme } from '@/@types/types';
const defaultTheme: Theme = {
  colors: {
    primary: '#62DF4E',
    secondary: '#4E7FDF',
    background: '#090909',
    textPrimary: '#FFFFFF',
    textSecondary: 'rgba(255,255,255,0.7)',
    border: '#FFFFFF'
  },
  fonts: {
    main: "'Abhaya Libre', sans-serif",
    headings: "'Abhaya Libre', sans-serif"
  },
  borderRadius: '12px',
  primaryColor: '',
  secondaryColor: '',
  backgroundColor: '',
  textColor: '',
  accentColor: '',
  fontFamily: '',
  titleFontFamily: '',
  padding: '',
  margin: '',
  boxShadow: '',
  transition: '',
  buttonStyle: 'square',
  linkDecoration: 'none'
};

export const useTheme = (userId: string) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'users', userId), async (userDoc) => {
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.currentThemeId) {
          const themeDoc = await getDoc(doc(db, 'themes', userData.currentThemeId));
          if (themeDoc.exists()) {
            setTheme({ ...defaultTheme, ...themeDoc.data() });
          }
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userId]);

  return { theme, loading };
};