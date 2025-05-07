import 'modern-normalize/modern-normalize.css';
import { createGlobalStyle } from "styled-components";

//! src: url(${Roboto}) format('truetype');



const GlobalStyles = createGlobalStyle`


 :root {
  --font-family: "Abhaya Libre", sans-serif;
  --second-family: "Inter", sans-serif;
  --third-family: "SF Pro", sans-serif;
  --font3: "Poppins", sans-serif;
  --font4: "IBM Plex Mono", sans-serif;
  --font5: "Anek Odia", sans-serif;
  --font6: "Patrick Hand", sans-serif;
  --font7: "SF Pro Display", sans-serif;
  --font8: "Neue Montreal", sans-serif;
  --font9: "Trebuchet MS", sans-serif;
  --font10: "Eurostile Extended", sans-serif;
  --font11: "Rajdhani", sans-serif;
  --font12: "Raleway", sans-serif;
  --font13: "Mont", sans-serif;
  --font14: "Plus Jakarta Sans", sans-serif;
  --font15: "Some Time Later", sans-serif;
  --font16: "Komika Axis", sans-serif;
  --font17: "PIXY", sans-serif;
  --font18: "Pokemon Solid", sans-serif;
  --font19: "Bob Sponge", sans-serif;
}



  * {
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  html {
    font-size: 14px;
    @media (min-width: 428px) {
      font-size: 16px;
    }
    height: 100%;
    overscroll-behavior: contain;
  }

  body {
    font-family: var(--main-font);
    background: var(--bg-main);
    color: var(--text-primary);
    margin: 0;
    padding: 0;
    min-height: 100vh;
    overflow-x: hidden;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
  }

  /* ======= Типографія ======= */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--title-font);
    margin: 0;
    line-height: 1.2;
  }

  p {
    margin: 0;
    line-height: 1.5;
  }

  /* ======= Інтерактивні елементи ======= */
  button {
    cursor: pointer;
    user-select: none;
    background: none;
    border: none;
    padding: 0;
    touch-action: manipulation;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  /* ======= Медіа ======= */
  img, video {
    max-width: 100%;
    height: auto;
    display: block;
    vertical-align: middle;
  }

  /* ======= Списки ======= */
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* ======= Форми ======= */
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    appearance: none;
    border-radius: 0;
  }

  /* ======= Toast-сповіщення ======= */
  .Toastify__toast-container {
    width: 100vw;
    padding: 0 16px;
    left: 0;
    bottom: 0;
    top: auto;
  }

  .Toastify__toast {
    margin-bottom: 16px;
    border-radius: 8px;
    min-height: 48px;
  }

  /* ======= Анімації ======= */
  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

export default GlobalStyles;