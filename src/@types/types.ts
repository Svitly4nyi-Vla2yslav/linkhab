export interface ProjectTranslation {
    en: string;
    ru: string;
    es: string;
  }
  
  export interface Project {
    id: string;
    title: ProjectTranslation | string; // Дозволяємо і рядок, і об'єкт перекладу
    description: ProjectTranslation | string;
    imageUrl?: string[];
    client?: ProjectTranslation | string;
  }
  
  export interface CaseStudy {
    title: ProjectTranslation | string;
    content: ProjectTranslation | string;
    imageUrl?: string;
  }