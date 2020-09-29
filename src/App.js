import React from 'react';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'styles/global-styles';
import SecureNotes from 'components/SecureNotes';

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <SecureNotes />
    </>
  );
}

export default App;
