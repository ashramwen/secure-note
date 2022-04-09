import { Normalize } from 'styled-normalize';
import GlobalStyle from 'styles/global-styles';
import { SecureNotesProvider } from 'context/SecureNotesContext';
import SecureNotes from 'components/SecureNotes';

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <SecureNotesProvider>
        <SecureNotes />
      </SecureNotesProvider>
    </>
  );
}

export default App;
