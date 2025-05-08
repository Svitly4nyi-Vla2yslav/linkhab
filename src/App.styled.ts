import 'modern-normalize/modern-normalize.css';
import { createGlobalStyle } from "styled-components";

// styles/GlobalStyles.ts
import { Theme } from '../src/@types/types';

interface GlobalStyleProps {
  theme: Theme;
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  :root {
    /* Визначаємо CSS-змінні на основі теми */
    --primary-color: ${({ theme }) => theme.primaryColor};
    --secondary-color: ${({ theme }) => theme.secondaryColor};
    --bg-color: ${({ theme }) => theme.backgroundColor};
    --text-color: ${({ theme }) => theme.textColor};
    --border-radius: ${({ theme }) => theme.borderRadius};
    --box-shadow: ${({ theme }) => theme.boxShadow};
    --transition: ${({ theme }) => theme.transition};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  html {
    font-size: 14px;
    height: 100%;
    
    @media (min-width: 428px) {
      font-size: 16px;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    background: var(--bg-color);
    color: var(--text-color);
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /* Типографія */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.titleFontFamily};
    line-height: 1.2;
  }

  /* Кнопки */
  button {
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: ${({ theme }) => 
      theme.buttonStyle === 'rounded' ? 'var(--border-radius)' : 
      theme.buttonStyle === 'pill' ? '999px' : '0'};
    padding: 8px 16px;
    cursor: pointer;
    transition: var(--transition);
    
    &:hover {
      opacity: 0.9;
    }
  }

  /* Посилання */
  a {
    color: var(--primary-color);
    text-decoration: ${({ theme }) => theme.linkDecoration};
    transition: var(--transition);
    
    &:hover {
      color: var(--secondary-color);
    }
  }
`;

export default GlobalStyles;