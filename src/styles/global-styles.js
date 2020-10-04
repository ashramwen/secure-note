import { createGlobalStyle } from 'styled-components';
import { sapphireBlue } from './colors';
import button from './button';
import input from './input';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Arial', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  *, *::before, *::after{
    color: ${sapphireBlue};
  } 

  #root {
    height: 100%;
  }

  .ellipsis{
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .wrap{
    overflow-wrap: break-word;
  }

  ${button};
  ${input};
`;

export default GlobalStyle;
