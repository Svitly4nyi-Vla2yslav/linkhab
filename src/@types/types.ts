export interface ProjectTranslation {
    en: string;
    ru: string;
    es: string;
  }
  
// types.ts
export interface Theme {
  // Кольори
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  
  // Шрифти
  fontFamily: string;
  titleFontFamily: string;
  
  // Розміри
  padding: string;
  margin: string;
  
  // Тіні
  boxShadow: string;
  
  // Анімації
  transition: string;
  
  // Специфічні компоненти
  buttonStyle: 'rounded' | 'square' | 'pill';
  linkDecoration: 'underline' | 'none';
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  borderSecondary?: string;
}

export interface ThemeFonts {
  main: string;
  headings?: string;
}

export interface Theme {
  colors: ThemeColors;
  fonts: ThemeFonts;
  borderRadius?: string | {
    small?: string;
    medium?: string;
    large?: string;
  };
}