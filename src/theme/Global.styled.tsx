import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
     ${({ theme: t }) => {
      return `font-family:${t.fonts.heading};
     color: ${t.colors.text};
     background-color:${t.colors.background}
      `;
     }};
   
  }
`;
